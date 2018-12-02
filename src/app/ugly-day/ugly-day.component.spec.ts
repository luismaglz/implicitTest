import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UglyDayComponent } from './ugly-day.component';

describe('UglyDayComponent', () => {
  let component: UglyDayComponent;
  let fixture: ComponentFixture<UglyDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UglyDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UglyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
