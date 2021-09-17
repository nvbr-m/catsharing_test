import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'cats',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
