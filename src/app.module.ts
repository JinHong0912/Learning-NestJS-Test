import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
