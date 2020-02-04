import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




import { SIG_EPON_API } from '../app.api';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    user: User = new User();
    constructor(private http: HttpClient, private router: Router) { }

    informacoesCadastroPessoal(user: User){
      this.user.nome = user.nome;
      this.user.sobrenome = user.sobrenome;
      this.user.email = user.email;
      this.user.emailAlternativo = user.emailAlternativo;
      this.router.navigate(['/signup/cadastroComplementar']);
    }

    informacoesCadastroComplementar(user: User) {
      this.user.telefone = user.telefone;
      this.user.cep = user.cep;
      this.user.uf = user.uf;
      this.user.cidade = user.cidade;
      this.user.quemSou = user.quemSou;
      this.router.navigate(['/signup/cadastroSenha']);
    }
    informacoesCadastroSenha(user: User){
      this.user.password = user.password;
      this.router.navigate(['/signup/verficacaoCadastro']);
    }

    verificarCodigoFinalizarCadastro(codigo: string) {
      this.router.navigate(['/home']);
    }

    login(username: string, password: string): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Set-Cookie');
        // headers.append('SET-COOKIE', 'Cookie');
        return this.http.post(`${SIG_EPON_API}/login`, {username, password}, { headers, observe: 'response'});
    }

    testeGroup(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${SIG_EPON_API}/grupo`);
    }

}
