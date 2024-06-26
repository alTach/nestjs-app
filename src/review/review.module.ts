import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewModel } from "./review.model";
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  imports: [TypeOrmModule.forFeature([ReviewModel])],
  providers: [ReviewService]
})
export class ReviewModule {}
