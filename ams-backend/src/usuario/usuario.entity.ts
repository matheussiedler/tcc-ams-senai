import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  nome: string;

  @Column()
  nif: number;

  @Column({ length: 50 })
  senha: string;

  @Column({ length: 80 })
  email: string;
}