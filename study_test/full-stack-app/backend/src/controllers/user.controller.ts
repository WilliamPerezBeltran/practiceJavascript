import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { User } from '../models/user.entity';
import { validate } from 'class-validator';

export class UserController {
  static async getAll(req: Request, res: Response): Promise<Response> {

    try {
      const userRepository = AppDataSource.getRepository(User);

      const users = await userRepository.find();

      return res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.json(user);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      console.log("create")
      console.log("req.body")
      console.log(req.body)
      const { name, email, password } = req.body;
      const user = new User();
      console.log("user")
      console.log(user)
      user.name = name;
      user.email = email;
      user.password = password;
      console.log(user)

      const errors = await validate(user);
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }

      const userRepository = AppDataSource.getRepository(User);
      await userRepository.save(user);
      return res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const userRepository = AppDataSource.getRepository(User);
      let user = await userRepository.findOneBy({ id: parseInt(id) });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.name = name;
      user.email = email;
      user.password = password;

      const errors = await validate(user);
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }

      await userRepository.save(user);
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({ id: parseInt(id) });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await userRepository.remove(user);
      return res.status(204).json();
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
