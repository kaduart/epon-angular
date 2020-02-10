import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSenhaComponent } from './cadastro-senha.component';

describe('CadastroSenhaComponent', () => {
  let component: CadastroSenhaComponent;
  let fixture: ComponentFixture<CadastroSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
