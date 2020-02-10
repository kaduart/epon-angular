import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignInComponent } from './security/sign-in/sign-in.component';
import {SignUpComponent} from './security/sign-up/sign-up.component';
import { EquipamentoComponent } from './equipamento/equipamento/equipamento.component';
import { CadastroPessoalComponent } from './security/sign-up/cadastro-pessoal/cadastro-pessoal.component';
import { CadastroComplementarComponent } from './security/sign-up/cadastro-complementar/cadastro-complementar.component';
import { CadastroSenhaComponent } from './security/sign-up/cadastro-senha/cadastro-senha.component';
import { VerificacaoCadastroComponent } from './security/sign-up/verificacao-cadastro/verificacao-cadastro.component';


export const routes: Routes = [
    {path: 'login', component: SignInComponent},
    {path: 'equipamento', component: EquipamentoComponent },
    {path: 'home', component: HomeComponent},
    {
        path: 'signup', component: SignUpComponent,
        children: [
             { path: 'cadastroPessoal', component: CadastroPessoalComponent },
             { path: 'cadastroComplementar', component: CadastroComplementarComponent },
             { path: 'cadastroSenha', component: CadastroSenhaComponent },
             { path: 'verficacaoCadastro', component: VerificacaoCadastroComponent },
        ]
    },
];
