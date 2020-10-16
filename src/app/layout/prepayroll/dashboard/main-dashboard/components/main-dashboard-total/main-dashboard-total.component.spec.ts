import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardTotalComponent } from './main-dashboard-totals.component';

describe('MainDashboardTotalComponent', () => {
  let component: MainDashboardTotalComponent;
  let fixture: ComponentFixture<MainDashboardTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDashboardTotalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
