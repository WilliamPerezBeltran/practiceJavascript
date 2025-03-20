import { DataSource } from 'typeorm';
import { User } from '../models/user.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [User],
  synchronize: true,
});

