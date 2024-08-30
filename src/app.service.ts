import { Injectable } from '@nestjs/common';  //injetado por injeção de dependencia

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest Project!';
  }                                   //traz osd dados que a rota espoera receber
  setHello(): string {
    return 'Hello World!';
  }
}

