import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEquipamentoComponent } from './adicionar-equipamento.component';
import { FormsModule } from '@angular/forms';

describe('AdicionarEquipamentoComponent', () => {
  let component: AdicionarEquipamentoComponent;
  let fixture: ComponentFixture<AdicionarEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarEquipamentoComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('espera que o equipamento tenha nome vazio após adição', () => {
    component.equipamento.nome = 'Regina Jaca';
    component.equipamento.ip = '111.111.111.111';
    component.salvarEquipamento();
    expect(component.equipamento.nome).toBe('');
  });
});
