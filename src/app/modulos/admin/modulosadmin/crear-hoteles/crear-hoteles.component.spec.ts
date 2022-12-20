import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHotelesComponent } from './crear-hoteles.component';

describe('CrearHotelesComponent', () => {
  let component: CrearHotelesComponent;
  let fixture: ComponentFixture<CrearHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
