import { ConfigService } from "@nestjs/config";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const getMySqlConfig = async (configService: ConfigService)=> {
  return {
    type: configService.get('MYSQL_TYPE'),
    host: configService.get('MYSQL_HOST'),
    port: configService.get('MYSQL_PORT'),
    username: configService.get('MYSQL_USERNAME'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DATABASE'),
    entities: [],
    synchronize: true,
  } as MysqlConnectionOptions
}
