import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopPageModel } from "./top-page.model";

@Module({
  controllers: [TopPageController],
  providers: [ConfigService],
  imports: [TypeOrmModule.forFeature([TopPageModel])],
})
export class TopPageModule {}
