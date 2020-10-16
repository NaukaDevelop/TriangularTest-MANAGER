import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDeleteComponent } from './holiday-delete.component';

describe('HolidayDeleteComponent', () => {
  let component: HolidayDeleteComponent;
  let fixture: ComponentFixture<HolidayDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
