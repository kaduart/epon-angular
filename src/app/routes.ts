import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { PersonalComponent } from './user/sign-up/personal/personal.component';
import { ComplementComponent } from './user/sign-up/complement/complement.component';
import { PasswordComponent } from './user/sign-up/password/password.component';
import { FinishComponent } from './user/sign-up/finish/finish.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
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
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
