import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InventarioController } from './inventario.controller';
import { inventarioProviders } from './inventario.providers';
import { InventarioService } from './inventario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InventarioController],
  providers: [
    ...inventarioProviders,
    InventarioService,
  ],
  exports: [InventarioService]
})
export class InventarioModule {}