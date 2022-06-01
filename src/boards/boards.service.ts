import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
//vi은 버전

@Injectable()
export class BoardsService {
  // private boards: Board = []; 해당의 경우 Board는 한개 이고 Board는 여러개 이기 때문에 Board[] 해준다
  private boards: Board[] = [];

  // 모든게시품_getAllBoards
  // getAllBoards(): Board[](타입) 리턴 값은 어떤 타입이 될 것인지 => 타입을 정해 주어야 한다
  getAllBoards(): Board[] {
    return this.boards;
  }
  // 게시물 생성
  creatBoard(createBaordDto: CreateBoardDto) {
    const { title, description } = createBaordDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  //게시글 가지고 온기
  getById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }
}
