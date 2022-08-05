import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { AstroPhasesService } from 'src/app/http/astro-phases.service';
import { ComprehensiveWeatherService } from 'src/app/http/comprehensive-weather.service';
import { CurrentWeatherService } from '../../http/current-weather.service';
import { GeocoderService } from '../../http/geocoder.service';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.scss']
})
export class WeatherResultsComponent implements OnInit, OnDestroy, OnChanges {

  searchBarInput!: string;
  geocode$!: Observable<Object>;
  currentWeather$!: Observable<Object>;
  comprehensiveWeather$!: Observable<Object>;
  astroPhases$!: Observable<Object>;
  subscriptions!: Subscription;
  locationData: any;
  latitude!: number;
  longitude!: number;

  @Output() weatherResults: Object = {};
  @Output() comprehensiveWeatherResults: Object = {};
  @Output() astroPhasesResults: Object = {};

  @Output() weatherResultsEmitter = new EventEmitter<Object>();
  @Output() comprehensiveWeatherResultsEmitter = new EventEmitter<Object>();
  @Output() astroPhasesEmitter = new EventEmitter<Object>();

  constructor(private geocoderService: GeocoderService, private currentWeatherService: CurrentWeatherService, private comprehensiveWeatherService: ComprehensiveWeatherService, private astroPhasesServive: AstroPhasesService) { }


  ngOnInit(): void {
    console.log("SearchBarComponent Initialized!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('button click changes');
    
  }

  getGeocodeLocation(value: string) {
    this.geocode$ = this.geocoderService.getGeocode(value)



    this.subscriptions = this.geocode$
      .subscribe(data => {       
        this.locationData = data;
        this.latitude = this.locationData[0].lat;
        this.longitude = this.locationData[0].lon;

        // this.getCurrentWeatherResults(this.latitude, this.longitude);
        // this.getComprehensiveWeather(this.latitude, this.longitude);
        // this.getAstroPhases(this.latitude, this.longitude);
        this.currentWeather$ = this.currentWeatherService.getCurrentWeather(this.latitude, this.longitude),
        this.comprehensiveWeather$ = this.comprehensiveWeatherService.getComprehensiveWeather(this.latitude, this.longitude),
        this.astroPhases$ = this.astroPhasesServive.getAstroPhases(this.latitude, this.longitude)

        console.log(this.currentWeather$, this.comprehensiveWeather$, this.astroPhases$);
        

      })

    // forkJoin([
    //   this.currentWeatherService.getCurrentWeather(this.latitude, this.longitude),
    //   this.comprehensiveWeatherService.getComprehensiveWeather(this.latitude, this.longitude),
    //   this.astroPhasesServive.getAstroPhases(this.latitude, this.longitude)

    // ]).subscribe(res => console.log('log the response', res))
      
  }

  handleWeatherResults() {
    // let current = 
  }

  getCurrentWeatherResults(lat: number, long: number) {
    this.currentWeather$ = this.currentWeatherService.getCurrentWeather(lat, long);

    this.subscriptions = this.currentWeather$.subscribe(data => {
      this.weatherResults = data;
      
      // console.log("WeatherResultsComponent weather results", this.weatherResults);
      
      this.weatherResultsEmitter.emit(this.weatherResults);
    });
  }

  getComprehensiveWeather(lat:number, long: number) {
    this.comprehensiveWeather$ = this.comprehensiveWeatherService.getComprehensiveWeather(lat, long);

    this.subscriptions = this.comprehensiveWeather$.subscribe(data => {
      this.comprehensiveWeatherResults = data;

      console.log("WeatherResultsComponent comprehensive weather results", this.comprehensiveWeatherResults);

      this.comprehensiveWeatherResultsEmitter.emit(this.comprehensiveWeatherResults);
    })
  }

  getAstroPhases(lat: number, long: number) {
    this.astroPhases$ = this.astroPhasesServive.getAstroPhases(lat, long);

    this.subscriptions = this.astroPhases$.subscribe(data => {
      this.astroPhasesResults = data;
      // console.log('WeatherResultsComponent astro phases', this.astroPhasesResults);

      this.astroPhasesEmitter.emit(this.astroPhasesResults);
      
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

