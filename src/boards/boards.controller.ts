import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

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
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.creatBoard(createBoardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getById(id);
  }

  @Delete(':id')
  // deleteBoardId(@Param() param: string): Board[] {
  //   return this.boardsService.deleteById(param);
  // }
  deleteBoardId(@Param('id') id: string): void {
    this.boardsService.deleteById(id);
  }

  @Patch(':id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardsService.updateStatus(id, status);
  }
}
