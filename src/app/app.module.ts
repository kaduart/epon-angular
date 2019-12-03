import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'materialize-css';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, httpInterceptProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
