"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Definir las rutas
router.get('/users', user_controller_1.UserController.getAll);
router.get('/users/:id', user_controller_1.UserController.getById);
router.post('/users', user_controller_1.UserController.create);
router.put('/users/:id', user_controller_1.UserController.update);
router.delete('/users/:id', user_controller_1.UserController.delete);
exports.default = router;
