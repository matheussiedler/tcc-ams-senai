import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AtivoDto } from './dto/ativo.dto';
import { Ativo } from './ativo.entity';
import { AtivoService } from './ativo.service';

@Controller('ativo')
export class AtivoController {
  constructor(private readonly ativoService: AtivoService) {}

  @Get('listar')
  async findAll(): Promise<Ativo[]> {
   return this.ativoService.findAll();
  }

  @Get('listarAmbientes')
   async listarAmbientes(): Promise<Ativo[]> {
    return this.ativoService.listarAmbientes();
  }
}
