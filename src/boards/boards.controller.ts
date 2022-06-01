import { Controller, Get, Post } from "@nestjs/common";
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get()
  // getAllBoards():string {
  //   return 'show Test';
  // }

  //hendle
  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  getCreat


}