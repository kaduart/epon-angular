import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignInComponent } from './security/sign-in/sign-in.component';
import {SignUpComponent} from './security/sign-up/sign-up.component';
import { PersonalComponent } from './security//sign-up/personal/personal.component';
import { ComplementComponent } from './security/sign-up/complement/complement.component';
import { PasswordComponent } from './security/sign-up/password/password.component';
import { FinishComponent } from './security/sign-up/finish/finish.component';


export const routes: Routes = [
    {path: 'login', component: SignInComponent},
    {path: 'home', component: HomeComponent},
    {
        path: 'signup', component: SignUpComponent,
        children: [
            { path: 'personal', component: PersonalComponent },
            { path: 'complement', component: ComplementComponent },
            { path: 'password', component: PasswordComponent },
            { path: 'finish', component: FinishComponent },
            { path: '**', component: PersonalComponent }
        ]
    },
];
