import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { CepService } from './cep.service';
import { Cep } from './cep.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-complementar',
  templateUrl: './cadastro-complementar.component.html',
  styleUrls: ['./cadastro-complementar.component.css']
})
export class CadastroComplementarComponent implements OnInit {

  user: User = new User();
  cep: Cep = new Cep();
  cadastroComplementForm: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private cepService: CepService ) {}

  ngOnInit() {
    this.cadastroComplementForm = this.fb.group({
      telefone: ['(+55)', [Validators.required, Validators.pattern('^[1-9]{2}[0-9]{4,5}[0-9]{4}$')]],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      quemSou: ['', Validators.required],
    });
    this.cadastroComplementForm.get('cep').valueChanges.pipe(debounceTime(1000)).subscribe(cep => this.buscarCep(cep));
  }

  efetuarCadastroComplementar() {
    this.user = Object.assign(this.userService, this.cadastroComplementForm.value);
    this.userService.informacoesCadastroComplementar(this.user);
  }

  buscarCep(cepRecebido: string) {
    this.cepService.buscar(cepRecebido)
    .subscribe(( cep ) => {
      this.cep = cep;
      this.cadastroComplementForm.get('cidade').setValue(cep.cidade);
      this.cadastroComplementForm.get('uf').setValue(cep.uf);
    });

  }

}
