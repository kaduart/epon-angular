import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoPerfilComponent } from './descricao-perfil.component';

describe('DescricaoPerfilComponent', () => {
  let component: DescricaoPerfilComponent;
  let fixture: ComponentFixture<DescricaoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
