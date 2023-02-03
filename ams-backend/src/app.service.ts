import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, Matheus!';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      nome: 'Matheus'
    }

    return objeto;
  }
}
