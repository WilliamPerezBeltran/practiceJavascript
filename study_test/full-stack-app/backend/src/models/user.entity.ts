import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Length } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @Length(2, 30)
  name!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @Length(6, 20)
  password!: string;
}

