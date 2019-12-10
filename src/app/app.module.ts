import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'materialize-css';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { routes } from './routes';
import { UserService } from './user/user.service';
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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SharedComponent,
    PersonalComponent,
    ComplementComponent,
    NavbarComponent,
    PasswordComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, httpInterceptProviders, CookieService, { provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
