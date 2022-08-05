import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/current-weather.model';

@Component({
  selector: 'app-main-forecast-display',
  templateUrl: './main-forecast-display.component.html',
  styleUrls: ['./main-forecast-display.component.scss']
})
export class MainForecastDisplayComponent implements OnInit {

  @Input('weatherResults') weatherResults!: CurrentWeather;
  @Input() time: string = ''
  @Input() sunrise!: number
  @Input() sunset!: number
  @Input() weatherDescription: string = ''
  @Input() weatherIcon: string = ''
  @Input() weatherIconURL: string = ''

  constructor() { }

  ngOnInit() {
  }
}
