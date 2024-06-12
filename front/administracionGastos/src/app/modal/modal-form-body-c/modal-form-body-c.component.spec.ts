import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormBodyCComponent } from './modal-form-body-c.component';

describe('ModalFormBodyCComponent', () => {
  let component: ModalFormBodyCComponent;
  let fixture: ComponentFixture<ModalFormBodyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormBodyCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormBodyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
