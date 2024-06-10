import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormGastoComponent } from './modal-form-gasto.component';

describe('ModalFormGastoComponent', () => {
  let component: ModalFormGastoComponent;
  let fixture: ComponentFixture<ModalFormGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormGastoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
