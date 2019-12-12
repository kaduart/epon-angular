import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from './sign-up/data/form-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'EPON';
  @Input() formData;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + 'loaded!');
  }

}
