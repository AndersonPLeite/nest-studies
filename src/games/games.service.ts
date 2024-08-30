import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdatePutGameDto } from './dto/update-put-game.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdatePatchGameDto } from './dto/update-patch-game-dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}
  private readonly games: CreateGameDto[] = [];
  async create(createGameDto: CreateGameDto) {
    return await this.prisma.games.create({
      data: {
        nome: createGameDto.nome,
        categoria: createGameDto.categoria,
        dataLancamento: createGameDto.dataLancamento,
      },
    });
  }

  async findAll() {
    return this.prisma.games.findMany();
  }

  async findOne(id: number) {
    return this.prisma.games.findUnique({
      where: { id },
    });
  }

  async update(id: number, _updatePutGameDto: UpdatePutGameDto) {
    const gameExists = await this.prisma.games.findUnique({
      where: {
        id,
      },
    });
    if (!gameExists) {
      throw new Error('Este jogo não está cadastrado!');
    }
    await this.prisma.games.update({
      data: {
        nome: _updatePutGameDto.nome,
        categoria: _updatePutGameDto.categoria,
        dataLancamento: _updatePutGameDto.dataLancamento,
      },
      where: {
        id,
      },
    });
  }

  async updatePartial(id: number, _updatePatchGameDto: UpdatePatchGameDto) {
    const gameExists = await this.prisma.games.findUnique({
      where: {
        id,
      },
    });
    if (!gameExists) {
      throw new Error('Este jogo não está cadastrado!');
    }
    await this.prisma.games.update({
      data: {
        nome: _updatePatchGameDto.nome,
        categoria: _updatePatchGameDto.categoria,
        dataLancamento:_updatePatchGameDto.dataLancamento,
      },
      where: {
        id,
      },
    });
  }

  /////////////////////////////////////////////////////////////////////////

  async remove(id: number) {
    const gameExists = await this.prisma.games.findUnique({
      where: {
        id,
      },
    });
    if (!gameExists) {
      throw new Error('Este jogo não está cadastrado!');
    }
    return await this.prisma.games.delete({
      where: {
        id,
      },
    });
  }
}
