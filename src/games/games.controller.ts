import { Controller, Get, Post,Body ,Put ,Patch , Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdatePutGameDto } from './dto/update-put-game.dto';
import { UpdatePatchGameDto } from './dto/update-patch-game-dto';

// Controler é uma classe JS que cria as rotas da aplicação
@Controller('games')   //decorator
export class GamesController {
  constructor(private  gamesService: GamesService) {} //constructor instancia a classe

  @Post()                                                   // O controller recebe a solicitação do tipo Post, Get, Update ou Delete
  async create(@Body() createGameDto: CreateGameDto) {  // ele define que os dados são do tipo DTO, passa pelas validações do DTO
    const games = this.gamesService.create(createGameDto); // chama o serviço gamesservice
    return games;
  }

  @Get()
  async findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id',  ParseIntPipe) id: number) {
    return this.gamesService.findOne(+id);
  }

  @Put(':id')
  async update(@Body() body: UpdatePutGameDto, @Param('id', ParseIntPipe) id: number){
    return await this.gamesService.update(+id, body);
    }
  
  

  @Patch(':id')
  async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() updatePatchGameDto: UpdatePutGameDto) {
    return  await this.gamesService.update(+id, updatePatchGameDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.remove(+id);
  }
}
