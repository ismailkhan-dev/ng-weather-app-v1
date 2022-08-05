import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/*
*  This service calls the current weather api. The lat/long coords are passed in from the WeatherResultsComponent. 
*/
export class CurrentWeatherService {

  API_KEY: string = "f5f7cc0a64d400c3a537806dde4ca3f6"; 
  WEATHER_BASE_URL: string = "https://api.openweathermap.org/data/2.5/weather";
  metric: string = "metric";

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  constructor(private http: HttpClient) {}

  getCurrentWeather(lat: number, long: number) {

    const options = lat && long ? { params: new HttpParams().set('lat', lat).append('lon', long).append('units', this.metric).append('appid', this.API_KEY) } : {};

    return this.http.get(this.WEATHER_BASE_URL, options);

  }



}
