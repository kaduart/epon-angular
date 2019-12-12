import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cookieValue: string

  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('JSESSIONID')
    console.log('cookie teste: ', this.cookieValue)
    this.userService.testeGroup().subscribe(res => {
      console.log('grupo: ', res)
    })
  }

}
