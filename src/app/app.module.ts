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
import { PersonalComponent } from './user/sign-up/personal/personal.component';
import { ComplementComponent } from './user/sign-up/complement/complement.component';
import { NavbarComponent } from './user/sign-up/navbar/navbar.component';
import { FormDataService } from './user/sign-up/data/form-data.service';
import { PasswordComponent } from './user/sign-up/password/password.component';
import { FinishComponent } from './user/sign-up/finish/finish.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SharedComponent,
    PersonalComponent,
    ComplementComponent,
    NavbarComponent,
    PasswordComponent,
    FinishComponent,
    HeaderComponent
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
  providers: [UserService, httpInterceptProviders, CookieService, { provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
