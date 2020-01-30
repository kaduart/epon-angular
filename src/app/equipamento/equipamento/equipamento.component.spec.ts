import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoComponent } from './equipamento.component';
import { ListarEquipamentoComponent } from '../listar-equipamento/listar-equipamento.component';
import { AdicionarEquipamentoComponent } from '../adicionar-equipamento/adicionar-equipamento.component';
import { FormsModule } from '@angular/forms';

describe('EquipamentoComponent', () => {
  let component: EquipamentoComponent;
  let fixture: ComponentFixture<EquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentoComponent, ListarEquipamentoComponent, AdicionarEquipamentoComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
