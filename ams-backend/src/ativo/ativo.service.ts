import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { AtivoDto } from './dto/ativo.dto';
import { Ativo } from './ativo.entity';

@Injectable()
export class AtivoService {
  constructor(
    @Inject('ATIVO_REPOSITORY')
    private ativoRepository: Repository<Ativo>,
  ) {}

  async findAll(): Promise<Ativo[]> {
    return this.ativoRepository.find();
  }

  async listarAmbientes(): Promise<Ativo[]> {
    return this.ativoRepository.query('SELECT DISTINCT ambiente FROM ativo;');
  }
}