import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForecastDisplayComponent } from './main-forecast-display.component';

describe('MainForecastDisplayComponent', () => {
  let component: MainForecastDisplayComponent;
  let fixture: ComponentFixture<MainForecastDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainForecastDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainForecastDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
