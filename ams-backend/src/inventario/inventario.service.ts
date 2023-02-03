import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { InventarioRegistrarDto } from './dto/inventario.registrar.dto';
import { Inventario } from './inventario.entity';

@Injectable()
export class InventarioService {
  constructor(
    @Inject('INVENTARIO_REPOSITORY')
    private inventarioRepository: Repository<Inventario>,
  ) {}

  async findAll(): Promise<Inventario[]> {
    return this.inventarioRepository.find();
  }

  async registrar(data: InventarioRegistrarDto): Promise<ResultadoDto>{
    let inventario = new Inventario();
    inventario.idativo = data.idativo;
    inventario.usuario = data.usuario;
    inventario.ambiente = data.ambiente;
    inventario.data = data.data;

    return this.inventarioRepository.save(inventario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Ativo escaneado com sucesso."
      }
    })
    .catch((error) => {
      console.log(error)
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao escanear o ativo."
      }
    })
  }

  async listarAtivos(): Promise<Inventario[]> {
    return this.inventarioRepository.query('SELECT DISTINCT idativo FROM inventario;');
  }

  async findAtivo(idAtivo: string): Promise<Inventario | undefined> {
    return this.inventarioRepository.findOne({where: {idativo: idAtivo}});
  }
}