import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { InventarioRegistrarDto } from './dto/inventario.registrar.dto';
import { Inventario } from './inventario.entity';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Get('listar')
  async findAll(): Promise<Inventario[]> {
    return this.inventarioService.findAll();
  }

  @Post('registrar')
  async cadastrar(@Body() data: InventarioRegistrarDto): Promise<ResultadoDto>{
    return this.inventarioService.registrar(data)
  }

  @Get('listarAtivos')
  async listarAtivos(): Promise<Inventario[]> {
   return this.inventarioService.listarAtivos();
  }

  @Get('findAtivo')
  async findAtivo(ativo): Promise<Inventario | undefined> {
    return this.inventarioService.findAtivo(ativo);
  }
}
