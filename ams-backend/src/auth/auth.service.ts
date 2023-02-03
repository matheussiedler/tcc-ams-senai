import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {

  constructor(private usuarioService: UsuarioService) {}

  async validarUsuario(nif: number, senha: string): Promise<any> {

    const user = await this.usuarioService.findOne(nif);
    
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

}
