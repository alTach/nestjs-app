import { Column, Entity } from "typeorm";

export enum TopLeverCategory {
  Courses,
  Services,
  Books,
  Products
}

@Entity()
export class HHData {
  @Column()
  count: number;
  @Column()
  juniorSalary: number;
  @Column()
  middleSalary: number;
  @Column()
  seniorSalary: number;
}

export class TopPagesAdvantage {
  @Column()
  title: string;
  @Column()
  description: string;
}

export class TopPageModel {

  @Column({enum: TopLeverCategory})
  firstCategory: TopLeverCategory;

  @Column()
  secondCategory: string;

  @Column({unique: true})
  alias: string;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column({type: 'json'})
  hh?: HHData

  @Column({array: true } )
  advantages: TopPagesAdvantage[];

  @Column()
  seoText: string;
  @Column()
  tagsTitle: string;
  @Column({array: true })
  tags: string[];
}
