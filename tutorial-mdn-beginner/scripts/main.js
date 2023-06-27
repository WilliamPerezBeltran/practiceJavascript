console.log("fdasfafadsf");
console.log(document);
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const captureLi = document.querySelector("li");
console.log(captureLi);

document.querySelector("html").addEventListener("click", function () {
  alert("alert test");
});

document.querySelector("html").addEventListener("click", function (e) {
  console.log(` imprime ${e.altKey}`);
  console.log(` imprime ${e.altKey}`);
});
