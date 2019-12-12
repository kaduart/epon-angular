import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/form-data.service';
import { Password } from '../data/formData.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  title = 'Crie uma senha!';
  password: Password;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.password = this.formDataService.getPassword();
      console.log('Password feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }

      this.formDataService.setPassword(this.password);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/signup/complement']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/signup/finish']);
      }
  }
}
