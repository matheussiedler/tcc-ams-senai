import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ativo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ativo: number;

  @Column()
  local: number;

  @Column({ length: 200 })
  ambiente: string;

  @Column({ length: 200 })
  descricao: string;
}