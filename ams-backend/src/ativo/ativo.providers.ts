import { DataSource } from 'typeorm';
import { Ativo } from './ativo.entity';

export const ativoProviders = [
  {
    provide: 'ATIVO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ativo),
    inject: ['DATA_SOURCE'],
  },
];