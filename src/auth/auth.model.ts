import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuthModel {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  createdAt: Date;
}
