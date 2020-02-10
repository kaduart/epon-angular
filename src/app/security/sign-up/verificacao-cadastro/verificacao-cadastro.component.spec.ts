import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoCadastroComponent } from './verificacao-cadastro.component';

describe('VerificacaoCadastroComponent', () => {
  let component: VerificacaoCadastroComponent;
  let fixture: ComponentFixture<VerificacaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
