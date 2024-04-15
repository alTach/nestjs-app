import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ReviewModel {
  @PrimaryGeneratedColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  title: string;
  @Column()
  descriptions: string;
  @Column()
  rating: string;
  @Column()
  createdAt: Date;
}
