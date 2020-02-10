import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';


@Component({
  selector: 'app-cadastro-pessoal',
  templateUrl: './cadastro-pessoal.component.html',
  styleUrls: ['./cadastro-pessoal.component.css']
})
export class CadastroPessoalComponent implements OnInit {

  cadastroPessoalForm: FormGroup;
  user: User = new User();

  constructor( private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroPessoalForm = this.fb.group({
      nome: ['', Validators.required ],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      confirmarEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      emailAlternativo: ['', Validators.required],
      checkAtualizacoes: [false],
    });
  }

  efetuarCadastroPessoal() {
      this.user = Object.assign(this.user, this.cadastroPessoalForm.value);
      this.userService.informacoesCadastroPessoal(this.user);

  }


}
