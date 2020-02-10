import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-verificacao-cadastro',
  templateUrl: './verificacao-cadastro.component.html',
  styleUrls: ['./verificacao-cadastro.component.css']
})
export class VerificacaoCadastroComponent implements OnInit {

  user: User = new User();
  verificacaoCodigoForm: FormGroup;

  constructor( private userService: UserService, private fb: FormBuilder) {
    console.log(userService.user);
   }

  ngOnInit() {
    this.verificacaoCodigoForm = this.fb.group({
      codigo: ['', Validators.required]
    });
  }

  finalizarCadastro() {
    this.userService.verificarCodigoFinalizarCadastro(this.verificacaoCodigoForm.value.codigo);
  }

}
