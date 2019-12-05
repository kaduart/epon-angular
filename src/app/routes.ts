import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component'

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: SignInComponent},
    {path: 'signup', component: SignUpComponent}
];