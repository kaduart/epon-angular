import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

<<<<<<< HEAD
  title = 'Crie uma senha!';
  usuario: User = new User();

  isLoginError = false;
=======
  loginForm: FormGroup
  
>>>>>>> 3d1cc344241ff59c448f0d3402de90478d4518d1
  constructor( private userService: UserService,
               private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  fazerLogin( ) {
    this.userService.login(this.loginForm.value.username,
                           this.loginForm.value.password)
      .subscribe((
        res: Response) => {
          this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      
    });
  }

}
