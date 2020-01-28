import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-listar-equipamento',
  templateUrl: './listar-equipamento.component.html',
  styleUrls: ['./listar-equipamento.component.css']
})
export class ListarEquipamentoComponent implements OnInit {

  equipamentos: Equipamento[] = [];

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit() {
    this.equipamentos = this.equipamentoService.listarEquipamento();
  }

}
