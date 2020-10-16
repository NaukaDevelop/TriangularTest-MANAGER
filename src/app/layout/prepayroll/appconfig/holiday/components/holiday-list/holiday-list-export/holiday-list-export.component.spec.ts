import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayListExportComponent } from './holiday-list-export.component';

describe('HolidayListExportComponent', () => {
  let component: HolidayListExportComponent;
  let fixture: ComponentFixture<HolidayListExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayListExportComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayListExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
