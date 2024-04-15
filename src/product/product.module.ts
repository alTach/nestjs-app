import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModel } from "./product.model";

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([ProductModel])]
})
export class ProductModule {}
