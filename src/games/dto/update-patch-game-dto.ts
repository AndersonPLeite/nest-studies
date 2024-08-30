import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdatePatchGameDto extends PartialType(CreateGameDto) {
    
}