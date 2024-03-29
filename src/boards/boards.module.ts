import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Repository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
