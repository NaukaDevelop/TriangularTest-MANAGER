import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHeaderComponent } from './sample-header.component';

describe('SampleHeaderComponent', () => {
  let component: SampleHeaderComponent;
  let fixture: ComponentFixture<SampleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
