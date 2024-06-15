import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEliminarGastoComponent } from './form-eliminar-gasto.component';

describe('FormEliminarGastoComponent', () => {
  let component: FormEliminarGastoComponent;
  let fixture: ComponentFixture<FormEliminarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEliminarGastoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEliminarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
