import { Component, OnInit } from '@angular/core';
import { TelaAtual } from './tela-atual.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  opcaoTela: TelaAtual;

  constructor(route: ActivatedRoute) {
    route.url.subscribe(() => {
      switch(route.snapshot.firstChild.url[0].path) {
        case 'cadastroPessoal':
          this.opcaoTela = TelaAtual.cadastroPessoalComponent;
          break;
        case 'cadastroComplementar':
          this.opcaoTela = TelaAtual.cadastroComplementarComponent;
          break;
        case 'cadastroSenha':
          this.opcaoTela = TelaAtual.cadastroSenhaComponent;
          break;
        case 'verficacaoCadastro':
          this.opcaoTela = TelaAtual.verificacaoCadastroComponent;
          break;
      }
    });
  }

  ngOnInit() {
  }

}
