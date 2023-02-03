import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  idinventario: number;

  @Column()
  idativo: string;

  @Column({ length: 100 })
  usuario: string;

  @Column()
  data: string;

  @Column({ length: 100 })
  ambiente: string;
}