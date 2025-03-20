"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_source_1 = require("../database/data-source");
const user_entity_1 = require("../models/user.entity");
const class_validator_1 = require("class-validator");
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener el repositorio para la entidad User
                const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                // Buscar todos los usuarios en la base de datos
                const users = yield userRepository.find();
                // Enviar la respuesta con el array de usuarios
                return res.json(users);
            }
            catch (error) {
                // Manejar errores y enviar una respuesta adecuada
                console.error('Error fetching users:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                const user = yield userRepository.findOneBy({ id: parseInt(req.params.id) });
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                return res.json(user);
            }
            catch (error) {
                console.error('Error fetching user by ID:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create");
                console.log("req.body");
                console.log(req.body);
                const { name, email, password } = req.body;
                const user = new user_entity_1.User();
                console.log("user");
                console.log(user);
                user.name = name;
                user.email = email;
                user.password = password;
                console.log(user);
                const errors = yield (0, class_validator_1.validate)(user);
                if (errors.length > 0) {
                    return res.status(400).json(errors);
                }
                const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                yield userRepository.save(user);
                return res.status(201).json(user);
            }
            catch (error) {
                console.error('Error creating user:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, password } = req.body;
                const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                let user = yield userRepository.findOneBy({ id: parseInt(id) });
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                user.name = name;
                user.email = email;
                user.password = password;
                const errors = yield (0, class_validator_1.validate)(user);
                if (errors.length > 0) {
                    return res.status(400).json(errors);
                }
                yield userRepository.save(user);
                return res.status(200).json(user);
            }
            catch (error) {
                console.error('Error updating user:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                const user = yield userRepository.findOneBy({ id: parseInt(id) });
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                yield userRepository.remove(user);
                return res.status(204).json();
            }
            catch (error) {
                console.error('Error deleting user:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.UserController = UserController;
