import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoalComponent } from './cadastro-pessoal.component';

describe('CadastroPessoalComponent', () => {
  let component: CadastroPessoalComponent;
  let fixture: ComponentFixture<CadastroPessoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPessoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
