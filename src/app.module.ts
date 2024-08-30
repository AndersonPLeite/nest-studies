import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { Prisma } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma.service';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
@Module({
  imports: [GamesModule, PrismaModule],
  controllers: [AppController, GamesController],
  providers: [AppService, PrismaService, GamesService],
})
export class AppModule {}
