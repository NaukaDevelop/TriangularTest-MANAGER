import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayListFilterComponent } from './holiday-list-filter.component';

describe('HolidayListFilterComponent', () => {
  let component: HolidayListFilterComponent;
  let fixture: ComponentFixture<HolidayListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayListFilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
