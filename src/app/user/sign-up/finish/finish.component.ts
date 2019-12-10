import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  title = 'Usuário cadastrado com sucesso!';
  @Input() formData: any;
  isFormValid = false;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log('Result feature loaded!' + this.formData);
  }

  submit() {
      alert('Excellent Job!');
      // this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
  }

}
