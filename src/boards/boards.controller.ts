import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get()
  // getAllBoards():string {
  //   return 'show Test';
  // }

  #hendle
  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}