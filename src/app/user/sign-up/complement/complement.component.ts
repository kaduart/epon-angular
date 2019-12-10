import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/form-data.service';
import { Complement } from '../data/formData.model';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {

  title = 'Complemente!';
  complement: Complement;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.complement = this.formDataService.getComplement();
      console.log('Complement feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }

      this.formDataService.setComplement(this.complement);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/signup/personal']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/signup/password']);
      }
  }

}
