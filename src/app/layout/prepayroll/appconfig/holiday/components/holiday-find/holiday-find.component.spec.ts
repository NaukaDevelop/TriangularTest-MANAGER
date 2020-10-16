import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayFindComponent } from './holiday-find.component';

describe('HolidayFindComponent', () => {
  let component: HolidayFindComponent;
  let fixture: ComponentFixture<HolidayFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayFindComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
