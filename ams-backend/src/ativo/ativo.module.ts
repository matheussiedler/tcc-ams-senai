import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AtivoController } from './ativo.controller';
import { ativoProviders } from './ativo.providers';
import { AtivoService } from './ativo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AtivoController],
  providers: [
    ...ativoProviders,
    AtivoService,
  ],
  exports: [AtivoService]
})
export class AtivoModule {}