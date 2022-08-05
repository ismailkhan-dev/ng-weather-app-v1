// For the current weather API call in CurrentWeatherService

export interface CurrentWeather {
  coord: {
    lon: number,
    lat: number,
  },
  name: string,
  sys: {
    country: string, 
    sunrise: number,
    sunset: number
  },
  main: {
    temp: number,
    feels_like: number, 
    humidity: number, 
    pressure: number,
    temp_max: number,
    temp_min: number
  },
  visibility: number,
  wind: {
    deg: number, 
    gust: number, 
    speed: number
  },
  weather: [
    {
      description: string;
      icon: string;
    }
  ]
}
