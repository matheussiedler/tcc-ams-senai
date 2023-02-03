import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

   @Get('listar')
   async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
   }

   @Post('cadastrar')
   async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data)
   }

   @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req) {
    return req.user;
   }

  @Get('usuarionif')
   async findOne(nif): Promise<Usuario> {
     return this.usuarioService.findOne(nif);
  }
}
