import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  usuario: User = new User();

  isLoginError: boolean = false;
  constructor( private userService: UserService,
               private router: Router ) { }

  ngOnInit() {
  }

  fazerLogin( ) {
    this.userService.userAuthentication(this.usuario)
      .subscribe((
        res: Response) => {
          this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}
