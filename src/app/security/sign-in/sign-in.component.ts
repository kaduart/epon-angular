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

  loginForm: FormGroup
  
  constructor( private userService: UserService,
               private fb: FormBuilder,
               private router: Router ) { 
                this.loginForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                })
              }

  ngOnInit() {
    
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
