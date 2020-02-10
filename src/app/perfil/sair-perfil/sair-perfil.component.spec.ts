import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SairPerfilComponent } from './sair-perfil.component';

describe('SairPerfilComponent', () => {
  let component: SairPerfilComponent;
  let fixture: ComponentFixture<SairPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SairPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SairPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
