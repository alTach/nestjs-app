import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ProductModel {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  oldPrice: number;

  @Column()
  credit: number;

  @Column()
  calculatedRating: number;

  @Column()
  description: string;

  @Column()
  advantages: string;

  @Column()
  disAdvantages: string;

  @Column({array: true})
  category: string[];

  @Column({array: true})
  tags: string[];

  @Column({type: "json"})
  characters: Record<string, string>
}
