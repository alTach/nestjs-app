import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from "./product.model";
import { FindProductDto } from "./dto/find-product.dto";

@Controller('product')
export class ProductController {

  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param() id: string) {

  }

  @Delete(':id')
  async delete(@Param() id: string) {

  }

  @Patch('id')
  async patch(@Body() dto: ProductModel) {

  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dtp: FindProductDto) {

  }
}
