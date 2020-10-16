import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardCardComponent } from './main-dashboard-card.component';

describe('MainDashboardCardComponent', () => {
  let component: MainDashboardCardComponent;
  let fixture: ComponentFixture<MainDashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
