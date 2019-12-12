import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder} from '@angular/forms'
import { SignInComponent } from './sign-in.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  var component: SignInComponent
  var userService: UserService
  var router: Router

  beforeEach(() => {
    component = new SignInComponent(userService, new FormBuilder(), router)
  })

  it("Deve criar um formulario com 2 controllers's (username e password)", () => {
    expect(component.loginForm.contains('username')).toBeTruthy()
    expect(component.loginForm.contains('password')).toBeTruthy()
  })

  it('deve requerer controller username', () => {
    let control = component.loginForm.get('username')
    control.setValue('')
    expect(control.valid).toBeFalsy()
  })
});
