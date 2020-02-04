import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComplementarComponent } from './cadastro-complementar.component';

describe('CadastroComplementarComponent', () => {
  let component: CadastroComplementarComponent;
  let fixture: ComponentFixture<CadastroComplementarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComplementarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComplementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
