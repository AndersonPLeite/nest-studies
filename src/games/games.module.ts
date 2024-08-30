import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { CreateGameDto } from './dto/create-game.dto';
import { PrismaService } from 'src/prisma.service';

@Module({       //Os metadados de um Modulo sempre são um objeto JSON
  imports: [CreateGameDto], 
  controllers: [GamesController],
  providers: [GamesService, PrismaService],
  exports: [GamesService]  //Quando este modulo é exportado, ele pode ser importado em outros modulos
})
export class GamesModule {}
