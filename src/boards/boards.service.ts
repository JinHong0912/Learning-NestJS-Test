import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];

  #모든게시품_getAllBoards
  getAllBoards() {
    return this.boards;
  }
}