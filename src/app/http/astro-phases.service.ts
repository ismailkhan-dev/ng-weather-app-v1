import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AstroPhasesService {

  API_KEY = '9ab6038fb09e4e73908122419221404'
  BASE_URL = 'http://api.weatherapi.com/v1/astronomy.json'
  // BASE_URL = 'http://api.weatherapi.com/v1/astronomy.json?key=9ab6038fb09e4e73908122419221404%20&q=43.6535,%20-79.3839&dt=2022-04-14'

  constructor( private http: HttpClient) { }

  getAstroPhases(lat: number, long: number) {

    const options = lat && long ? { params: new HttpParams().set('key', this.API_KEY).append('q', `${lat}, ${long}`) } : {}  

    return this.http.get(this.BASE_URL, options)
  }

}
