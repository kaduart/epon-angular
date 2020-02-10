import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(FormControlName, {static: false}) model: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva');

    }
  }

  hasSucces(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
