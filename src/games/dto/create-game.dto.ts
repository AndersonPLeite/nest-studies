import { IsDate, IsString,  } from "class-validator";

export class CreateGameDto { //interface que verifica o dado transitado na rota e verificar se é do tipo que se espera
    @IsString()
    nome: string;
    
    categoria: string;

    
    @IsDate()
    dataLancamento: Date;
}
