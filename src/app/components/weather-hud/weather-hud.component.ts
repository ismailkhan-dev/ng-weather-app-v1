import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/current-weather.model';
import { DateConvertService } from 'src/app/services/date-service.service';

@Component({
  selector: 'app-weather-hud',
  templateUrl: './weather-hud.component.html',
  styleUrls: ['./weather-hud.component.scss']
})

export class WeatherHudComponent implements OnInit {
  
  @Input('hudResults') weatherResults!: CurrentWeather;
  @Input('fullWeather') comprehensiveResults!: any;
  @Input() astroResults!: any;
  
  time: string = new Date().toLocaleTimeString();
  sunrise: number = 0
  sunset: number = 0
  weatherDescription: string = ''
  weatherIcon: string = ''
  weatherIconURL: string = ''

  constructor(public dateConvert: DateConvertService) {}

  ngOnInit(): void {
    this.weatherDescription = this.weatherResults.weather[0].description
    this.weatherIcon = this.weatherResults.weather[0].icon
    this.weatherIconURL = `http://openweathermap.org/img/w/${this.weatherIcon}.png`
    this.sunrise = this.weatherResults.sys.sunrise
    this.sunset = this.weatherResults.sys.sunset
    

    this.convertUNIXTime();

    console.log('WeatherHudComponent weatherResults', this.weatherResults);
    console.log('WeatherHudComponent astroResults', this.astroResults);
    console.log('WeatherHudComponent comprehensiveResults', this.comprehensiveResults);
    
  }

  convertUNIXTime() {
    this.dateConvert.convertUNIXTime(this.sunrise).subscribe(res => {
      this.sunrise = res
    })
    this.dateConvert.convertUNIXTime(this.sunset).subscribe(res => {
      this.sunset = res
    })

  }


}
