import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WeatherResultsComponent } from './components/weather-results/weather-results.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { WeatherHudComponent } from './components/weather-hud/weather-hud.component';
import { MainForecastDisplayComponent } from './components/weather-hud/main-forecast-display/main-forecast-display.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherResultsComponent,
    MenuBarComponent,
    WeatherHudComponent,
    MainForecastDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
