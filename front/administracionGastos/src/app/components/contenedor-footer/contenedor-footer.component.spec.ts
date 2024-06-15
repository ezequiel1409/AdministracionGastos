import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFooterComponent } from './contenedor-footer.component';

describe('ContenedorFooterComponent', () => {
  let component: ContenedorFooterComponent;
  let fixture: ComponentFixture<ContenedorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
