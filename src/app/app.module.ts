import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { routes } from './routes';
import { UserService } from './security/user.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptProviders } from './http-interceptor';
import { CookieService } from 'ngx-cookie-service';
import {ProgressBarModule} from 'angular-progress-bar';
// import { PersonalComponent } from './security/sign-up/personal/personal.component';
// import { ComplementComponent } from './security/sign-up/complement/complement.component';
// import { NavbarComponent } from './security/sign-up/navbar/navbar.component';
// import { FormDataService } from './security/sign-up/data/form-data.service';
// import { PasswordComponent } from './security/sign-up/password/password.component';
// import { FinishComponent } from './security/sign-up/finish/finish.component';
import { HeaderComponent } from './header/header.component';
import { EquipamentoComponent } from './equipamento/equipamento/equipamento.component';
import { AdicionarEquipamentoComponent } from './equipamento/adicionar-equipamento/adicionar-equipamento.component';
import { ListarEquipamentoComponent } from './equipamento/listar-equipamento/listar-equipamento.component';
import { CadastroPessoalComponent } from './security/sign-up/cadastro-pessoal/cadastro-pessoal.component';
import { CadastroComplementarComponent } from './security/sign-up/cadastro-complementar/cadastro-complementar.component';
import { CadastroSenhaComponent } from './security/sign-up/cadastro-senha/cadastro-senha.component';
import { VerificacaoCadastroComponent } from './security/sign-up/verificacao-cadastro/verificacao-cadastro.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { DescricaoPerfilComponent } from './perfil/descricao-perfil/descricao-perfil.component';
import { LinksPerfilComponent } from './perfil/links-perfil/links-perfil.component';
import { SairPerfilComponent } from './perfil/sair-perfil/sair-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SharedComponent,
    // PersonalComponent,
    // ComplementComponent,
    // NavbarComponent,
    // PasswordComponent,
    // FinishComponent,
    HeaderComponent,
    EquipamentoComponent,
    AdicionarEquipamentoComponent,
    ListarEquipamentoComponent,
    CadastroPessoalComponent,
    CadastroComplementarComponent,
    CadastroSenhaComponent,
    VerificacaoCadastroComponent,
    PerfilComponent,
    DescricaoPerfilComponent,
    LinksPerfilComponent,
    SairPerfilComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [UserService, httpInterceptProviders, CookieService],
  // providers: [UserService, httpInterceptProviders, CookieService, { provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
