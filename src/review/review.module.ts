import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewModel } from "./review.model";

@Module({
  controllers: [ReviewController],
  imports: [TypeOrmModule.forFeature([ReviewModel])],
})
export class ReviewModule {}
