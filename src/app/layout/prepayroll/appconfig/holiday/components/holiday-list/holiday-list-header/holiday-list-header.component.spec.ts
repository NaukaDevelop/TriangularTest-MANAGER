import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayListHeaderComponent } from './holiday-list-header.component';

describe('HolidayListHeaderComponent', () => {
  let component: HolidayListHeaderComponent;
  let fixture: ComponentFixture<HolidayListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayListHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
