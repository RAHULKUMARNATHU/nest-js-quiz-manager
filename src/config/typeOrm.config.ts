import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/**/*.migrations.js'],
      // cli: {
      //   migrationsDir: __dirname + '/../database/migrations',

      // },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      dropSchema: false,
      logging: true,
    };
  }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity.js'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: __dirname + '/../database/migrations',
  // },
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
};
