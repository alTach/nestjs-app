import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from "./top-page.model";
import { FindTopPageDto } from "./dto/find-top-page.dto";
import { ConfigService } from "@nestjs/config";

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {
  }


  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
    this.configService.get('TEST');
  }

  // @Post('save')
  // async save(@Body() dto: TopPageModel, '_id'>) {
  //   this.configService.get('TEST');
  // }

  @Get('get/:id')
  async get(@Param() id: string) {

  }

  @Delete('delete/:id')
  async delete(@Param() id: string) {

  }

  @Patch('patch/:id')
  async patch(@Body() dto: TopPageModel) {

  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dtp: FindTopPageDto) {

  }

}
