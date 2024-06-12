import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponenteComponent } from './cabecera-componente.component';

describe('CabeceraComponenteComponent', () => {
  let component: CabeceraComponenteComponent;
  let fixture: ComponentFixture<CabeceraComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
