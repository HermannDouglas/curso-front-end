import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponenteComponent } from './meu-componente.component';

describe('MeuComponenteComponent', () => {
  let component: MeuComponenteComponent;
  let fixture: ComponentFixture<MeuComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuComponenteComponent]
    });
    fixture = TestBed.createComponent(MeuComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
