import { Injectable } from '@angular/core';
import { Personal, Complement, FormData } from './formData.model';
import { Password } from './formData.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonalFormValid = false;
  private isPasswordFormValid = false;
  private isComplementFormValid = false;

  getPersonal(): Personal {
    const personal: Personal = {
      nome: this.formData.nome,
      sobrenome: this.formData.sobrenome,
      email: this.formData.email,
      cemail: this.formData.cemail,
      ealternativo: this.formData.ealternativo
    };
    return personal;
  }

  setPersonal(data: Personal) {
    this.isPersonalFormValid = true;
    this.formData.nome = data.nome;
    this.formData.sobrenome = data.sobrenome;
    this.formData.email = data.email;
    this.formData.cemail = data.cemail;
    this.formData.ealternativo = data.ealternativo;
  }

  getComplement(): Complement {
    const complement: Complement = {
      telefone: this.formData.telefone,
      cep: this.formData.cep,
      uf: this.formData.uf,
      cidade: this.formData.cidade
    };
    return complement;
  }

  setComplement(data: Complement) {
    this.isComplementFormValid = true;
    this.formData.telefone = data.telefone;
    this.formData.cep = data.cep;
    this.formData.uf = data.uf;
    this.formData.cidade = data.cidade;
  }

  getPassword(): Password {
    const password: Password = {
      senha: this.formData.senha,
      senhaConfirm: this.formData.senhaConfirm,
    };
    return password;
  }

  setPassword(data: Password) {
    this.isPasswordFormValid = true;
    this.formData.senha = data.senha;
    this.formData.senhaConfirm = data.senhaConfirm;
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isPersonalFormValid = this.isComplementFormValid = this.isPasswordFormValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isPersonalFormValid &&
      this.isPasswordFormValid &&
      this.isComplementFormValid;
  }
}
