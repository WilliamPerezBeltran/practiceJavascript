import Ember from "ember";
import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { debounce } from "@ember/runloop";
import { DEBUG } from "@glimmer/env";
import config from "spark-frontend/config/environment";

// how long to wait before user is flagged as idle (ms)
const IDLE_TIMER_SECONDS = 60000;

// how often to refresh Keycloak session (ms)
const REFRESH_EVERY_SECONDS = 58000;

export default Service.extend({
  fetch: service(),
  session: service(),

  idle: false,
  started: false,
  refreshing: false,
  refreshSessionTimer: null,
  checkSessionTimer: null,
  idleTimer: null,

  init() {
    console.log("init");
    this._super(...arguments);

    this.onActivityDetected = () => {
      debounce(this, this.resetIdleTimer, 500, true);
    };
  },

  start() {
    console.log("start");
    // do nothing on during test environments
    if (Ember.testing) {
      // eslint-disable-line ember-suave/no-direct-property-access
      return;
    }

    this.started = true;
    this.idle = false;

    this.idleTimer = this.createIdleTimer();

    // refresh Keycloak session every REFRESH_EVERY_SECONDS
    this.refreshSessionTimer = setInterval(
      this.refreshSession.bind(this),
      REFRESH_EVERY_SECONDS
    );

    // check to see if the user has lost their Keycloak session due to inactivity
    this.checkSessionTimer = setInterval(
      this.checkForTimeout.bind(this),
      config.checkSessionAliveEverySeconds
    );

    window.addEventListener("mousemove", this.onActivityDetected, {
      passive: true,
    });
    window.addEventListener("keydown", this.onActivityDetected, {
      passive: true,
    });
    window.addEventListener("mousedown", this.onActivityDetected, {
      passive: true,
    });
    window.addEventListener("touchstart", this.onActivityDetected, {
      passive: true,
    });
  },

  stop() {
    console.log("stop");
    if (!this.started) {
      return;
    }

    this.started = false;

    // clear the idle event listeners
    window.removeEventListener("mousemove", this.onActivityDetected, {
      passive: true,
    });
    window.removeEventListener("keydown", this.onActivityDetected, {
      passive: true,
    });
    window.removeEventListener("mousedown", this.onActivityDetected, {
      passive: true,
    });
    window.removeEventListener("touchstart", this.onActivityDetected, {
      passive: true,
    });

    // clear recurring function calls
    if (this.refreshSessionTimer != null) {
      clearInterval(this.refreshSessionTimer);
      this.refreshSessionTimer = null;
    }

    if (this.checkSessionTimer != null) {
      clearInterval(this.checkSessionTimer);
      this.checkSessionTimer = null;
    }
  },

  createIdleTimer() {
    console.log("createIdleTimer");

    if (DEBUG) {
      console.debug(
        `[Idle] User will be idle in ${IDLE_TIMER_SECONDS / 1000} seconds`
      ); // eslint-disable-line no-console
    }

    return setTimeout(() => {
      if (DEBUG) {
        console.debug("[Idle] User is now idle!"); // eslint-disable-line no-console
      }

      this.idle = true;
      this.onIdle();
    }, IDLE_TIMER_SECONDS);
  },

  resetIdleTimer() {
    console.log("resetIdleTimer");
    if (this.idle) {
      if (DEBUG) {
        console.debug("[Idle] User is no longer idle"); // eslint-disable-line no-console
      }

      this.idle = false;
      this.onActive();
    }

    clearTimeout(this.idleTimer);

    if (DEBUG) {
      console.debug("[Idle] Resetting idle timer..."); // eslint-disable-line no-console
    }

    this.idleTimer = this.createIdleTimer();
  },

  onIdle() {
    console.log("onIdle");

    // if user is idle for IDLE_TIMER_SECONDS then kill the refresh timer
    if (this.refreshSessionTimer != null) {
      clearInterval(this.refreshSessionTimer);
      this.refreshSessionTimer = null;
    }
  },

  onActive() {
    console.log("onActive");

    // user is active again, refresh the session and start the refresh timer
    // this only triggers after the user has gone into idle and become active again
    this.refreshSession();
    this.refreshSessionTimer = setInterval(
      this.refreshSession.bind(this),
      REFRESH_EVERY_SECONDS
    );
  },

  timeout() {
    console.log("timeout");

    if (DEBUG) {
      console.debug("[Idle] User session has expired, logging out..."); // eslint-disable-line no-console
    }

    // stop all timers
    this.stop();

    // invalidate the session
    let { session } = this;
    session.set("sessionTimeout", true);
    session.set("onLogin", window.location.href);
    session.invalidate();
  },

  refreshSession() {
    console.log("timerefreshSessionut");

    // do nothing if we are already refreshing
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;

    if (DEBUG) {
      console.debug("[Idle] Making request to backend to refresh session time"); // eslint-disable-line no-console
    }

    // hit Keycloak to refresh session, if user isnt logged in anymore then log the user out
    this.fetch
      .request("refresh_session", { method: "POST" })
      .then(({ meta }) => {
        let { redirect_to_login: redirectToLogin } = meta;
        if (redirectToLogin) {
          this.timeout();
        }
        this.refreshing = false;
      })
      .catch(() => {
        this.timeout();
      });
  },

  // see if Keycloak session is still alive, log out if not
  checkForTimeout() {
    console.log("checkForTimeout");
    this.refreshing = true;
    this.fetch
      .request("check_session_status", { method: "POST" })
      .then(({ meta }) => {
        let { session_alive: sessionAlive } = meta;
        if (sessionAlive == null || sessionAlive === false) {
          if (DEBUG) {
            console.debug("[Idle] Backend confirms session timeout"); // eslint-disable-line no-console
          }

          this.timeout();
        } else {
          if (DEBUG) {
            console.debug("[Idle] Backend confirms session is still active"); // eslint-disable-line no-console
          }

          this.refreshing = false;
        }
      })
      .catch(() => {
        this.timeout();
      });
  },
});
