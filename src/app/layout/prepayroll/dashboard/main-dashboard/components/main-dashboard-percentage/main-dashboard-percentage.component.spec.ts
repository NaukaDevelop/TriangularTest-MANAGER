import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardPercentageComponent } from './main-dashboard-percentage.component';

describe('MainDashboardPercentageComponent', () => {
  let component: MainDashboardPercentageComponent;
  let fixture: ComponentFixture<MainDashboardPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
