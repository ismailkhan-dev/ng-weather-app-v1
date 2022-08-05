import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
*  This service calls the one call API. The lat/long coords are passed in from the WeatherResultsComponent. 
*/
export class ComprehensiveWeatherService {

  API_KEY: string = "f5f7cc0a64d400c3a537806dde4ca3f6"; 
  WEATHER_BASE_URL: string = "https://api.openweathermap.org/data/2.5/onecall";
  metric: string = "metric";

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  constructor(private http: HttpClient) {}

  getComprehensiveWeather(lat: number, long: number) {

    const options = lat && long ? { params: new HttpParams().set('lat', lat).append('lon', long).append('units', this.metric).append('appid', this.API_KEY) } : {};

    return this.http.get(this.WEATHER_BASE_URL, options);

  }
}
