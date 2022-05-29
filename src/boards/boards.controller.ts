import { Controller, Get } from "@nestjs/common";

@Controller('boards')
export class BoardsController {

  @Get()
  gettest():string {
    return "핸들링 테스트 하기";
  }
}