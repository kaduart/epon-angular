import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { PersonalComponent } from './user/sign-up/personal/personal.component';
import { ComplementComponent } from './user/sign-up/complement/complement.component';
import { PasswordComponent } from './user/sign-up/password/password.component';
import { FinishComponent } from './user/sign-up/finish/finish.component';
import { HeaderComponent } from './header/header.component'

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: SignInComponent},
    {
        path: 'signup', component: UserComponent,
        children: [
            { path: 'personal', component: PersonalComponent },
            { path: 'complement', component: ComplementComponent },
            { path: 'password', component: PasswordComponent },
            { path: 'finish', component: FinishComponent },
            { path: '**', component: PersonalComponent }
        ]
    },
];
