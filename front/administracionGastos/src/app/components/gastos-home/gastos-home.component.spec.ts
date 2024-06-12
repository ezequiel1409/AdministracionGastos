import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosHomeComponent } from './gastos-home.component';

describe('GastosHomeComponent', () => {
  let component: GastosHomeComponent;
  let fixture: ComponentFixture<GastosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GastosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
