import { DataSource } from 'typeorm';
import { Inventario } from './inventario.entity';

export const inventarioProviders = [
  {
    provide: 'INVENTARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Inventario),
    inject: ['DATA_SOURCE'],
  },
];