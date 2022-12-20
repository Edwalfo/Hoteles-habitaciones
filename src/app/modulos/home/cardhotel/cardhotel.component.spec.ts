import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhotelComponent } from './cardhotel.component';

describe('CardhotelComponent', () => {
  let component: CardhotelComponent;
  let fixture: ComponentFixture<CardhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
