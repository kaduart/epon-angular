import { SIG_EPON_API } from './../../../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from './cep.model';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  resultado: Cep;

  constructor(private http: HttpClient) { }


  buscar(cep: string) {
    return this.http
        .get(`${SIG_EPON_API}/cep`)
        .map(data => this.resultado = this.converterRespostaParaCep(data));

  }

  private converterRespostaParaCep(cepNaResposta): Cep {
      const cep = new Cep();

      cep.cidade = cepNaResposta.cidade;
      cep.uf = cepNaResposta.uf;
      return cep;
}
}
