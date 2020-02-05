import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-cadastro-complementar',
  templateUrl: './cadastro-complementar.component.html',
  styleUrls: ['./cadastro-complementar.component.css']
})
export class CadastroComplementarComponent implements OnInit {

  user: User = new User();
  cadastroComplementForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroComplementForm = this.fb.group({
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      quemSou: ['', Validators.required],
    });
  }

  efetuarCadastroComplementar(){
    this.user = Object.assign(this.userService, this.cadastroComplementForm.value);
    this.userService.informacoesCadastroComplementar(this.user);
  }

}
