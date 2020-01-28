import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-adicionar-equipamento',
  templateUrl: './adicionar-equipamento.component.html',
  styleUrls: ['./adicionar-equipamento.component.css']
})
export class AdicionarEquipamentoComponent implements OnInit {

  equipamento: Equipamento;

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit() {
    this.clear();
  }

  salvarEquipamento() {
    const equipamentoSalvo = this.equipamentoService.salvarEquipamento(this.equipamento);
    alert('salvei o equipamento com id ' + equipamentoSalvo.id);
    this.clear();
  }

  clear() {
    this.equipamento = {
      id: '',
      nome: '',
      ip: ''
    };
  }

}
