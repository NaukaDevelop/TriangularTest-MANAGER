import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayNewDatepickerComponent } from './holiday-new-datepicker.component';

describe('HolidayNewDatepickerComponent', () => {
  let component: HolidayNewDatepickerComponent;
  let fixture: ComponentFixture<HolidayNewDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayNewDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayNewDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
