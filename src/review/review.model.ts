import { Column, ObjectId, PrimaryGeneratedColumn } from "typeorm";

export class ReviewModel {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  title: string;
  @Column()
  descriptions: string;
  @Column()
  rating: string;
  @Column({nullable: true})
  productId: number
}
