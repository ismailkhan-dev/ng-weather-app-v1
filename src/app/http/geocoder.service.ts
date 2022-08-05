import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
  GeocoderService is an API. The geocoding API converts user string into lat/long coordinates.
  The service creates the coordinates and the coords are consumed by the weather apps 

  Link - https://openweathermap.org/api/geocoding-api

*/
export class GeocoderService {

  API_KEY: string = "f5f7cc0a64d400c3a537806dde4ca3f6"; 
  GEOCODE_BASE_URL: string = "http://api.openweathermap.org/geo/1.0/direct"
  requestLimit: number = 5

  locationData: any;
  latitude!: number;
  longitude!: number;

  constructor(private http: HttpClient) { }

  // GET geocode who takes a location. //
  getGeocode(location: string) {
    location = location.trim();

    const options = location ? { params: new HttpParams().set('q', location).append('limit', this.requestLimit).append('appid', this.API_KEY) } : {}; 

    return this.http.get(this.GEOCODE_BASE_URL, options)
  }

}
