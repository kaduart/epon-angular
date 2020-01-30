import { Injectable } from '@angular/core';
import { Equipamento } from './equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor() { }

  salvarEquipamento(equipamento: Equipamento): Equipamento {
    equipamento.id = '1111';
    return equipamento;
  }

  listarEquipamento(): Equipamento[] {
    const lista = [
      {id: '345', nome: 'a', ip: '0'},
      {id: '346', nome: 'b', ip: '1'},
      {id: '347', nome: 'c', ip: '2'},
      {id: '348', nome: 'd', ip: '3'},
      {id: '349', nome: 'e', ip: '4'},
      {id: '3451', nome: 'f', ip: '5'},
      {id: '3452', nome: 'g', ip: '6'},
    ];
    return lista;
  }
}
