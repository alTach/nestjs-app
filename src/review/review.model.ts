import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
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
  rating: number;
  @Column({nullable: true})
  productId: number
}
