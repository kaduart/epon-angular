import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from './data/form-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formDataService: FormDataService) { }
  
  title = 'EPON';
  @Input() formData;

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + 'loaded!');
  }

}
