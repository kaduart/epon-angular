import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-cadastro-senha',
  templateUrl: './cadastro-senha.component.html',
  styleUrls: ['./cadastro-senha.component.css']
})
export class CadastroSenhaComponent implements OnInit {

  user: User = new User();
  cadastroSenhaForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroSenhaForm = this.fb.group({
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required]
    });
  }

  efetuarCadastroSenha() {
    this.user = Object.assign(this.userService, this.cadastroSenhaForm.value);
    this.userService.informacoesCadastroSenha(this.user);
  }

}
