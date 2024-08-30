import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
    providers: [PrismaService], // aqui podemos registrar os providers que serão usados pelo modulo
    exports: [PrismaService] // aqui podemos exportar os providers para que outros módulos possam usar eles
})
export  class PrismaModule {}// module é um export de uma classe