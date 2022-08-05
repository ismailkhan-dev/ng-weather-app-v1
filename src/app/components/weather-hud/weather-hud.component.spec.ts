import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHudComponent } from './weather-hud.component';

describe('WeatherHudComponent', () => {
  let component: WeatherHudComponent;
  let fixture: ComponentFixture<WeatherHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
