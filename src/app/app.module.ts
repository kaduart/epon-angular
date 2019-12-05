import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'materialize-css';
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
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SharedComponent,
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
  providers: [UserService, httpInterceptProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
