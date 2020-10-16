import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidebarListComponent } from './navigation-sidebar-list.component';

describe('NavigationSidebarListComponent', () => {
  let component: NavigationSidebarListComponent;
  let fixture: ComponentFixture<NavigationSidebarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSidebarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidebarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
