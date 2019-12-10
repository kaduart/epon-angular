import { Component, OnInit } from '@angular/core';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  title = 'Crie uma conta!';
  personal: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personal = this.formDataService.getPersonal();
      console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }

      this.formDataService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/signup/complement']);
      }
  }

}
