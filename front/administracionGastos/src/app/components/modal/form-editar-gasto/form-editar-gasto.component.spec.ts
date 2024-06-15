import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarGastoComponent } from './form-editar-gasto.component';

describe('FormEditarGastoComponent', () => {
  let component: FormEditarGastoComponent;
  let fixture: ComponentFixture<FormEditarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarGastoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
