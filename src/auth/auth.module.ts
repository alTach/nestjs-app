import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModel } from "./auth.model";

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([AuthModel])
  ]
})
export class AuthModule {}
