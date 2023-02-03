import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AtivoModule } from './ativo/ativo.module';
import { InventarioModule } from './inventario/inventario.module';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    AtivoModule,
    InventarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
