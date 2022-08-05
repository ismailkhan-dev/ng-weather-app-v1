import { Component } from '@angular/core';
import { CurrentWeather } from './models/current-weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  weatherResults!: CurrentWeather;
  comprehensiveResults!: any;
  astroPhasesResults!: any;


  receiveWeatherResults($event: any) {
    this.weatherResults = $event;        
  }

  receiveComprehensiveResults($event: any) {
    this.comprehensiveResults = $event;
    console.log('AppComponent receiveComprehensiveResults', this.comprehensiveResults);
    
  }

  receiveAstroPhasesResults($event: any) {
    this.astroPhasesResults = $event;
  } 
}
