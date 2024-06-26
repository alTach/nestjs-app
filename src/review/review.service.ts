import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ReviewModel } from "./review.model";
import { Repository } from "typeorm";
import { CreateReviewDto } from "./dto/create-review.dto";

@Injectable()
export class ReviewService {
   constructor(@InjectRepository(ReviewModel) public reviewRepository: Repository<ReviewModel>) {}

  async create(dto: CreateReviewDto) {
     return this.reviewRepository.save([dto])
  }

  async delete(id: string) {
    return this.reviewRepository.delete(id);
  }

  async findByProductId(productId: number): Promise<ReviewModel[]> {
    return this.reviewRepository.find({where: { productId }})
  }

  async deleteByProductId(productId: number) {
    this.reviewRepository.createQueryBuilder().delete().where('productId', {productId})
  }
}
