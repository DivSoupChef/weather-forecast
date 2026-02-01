export interface CurrentWeather {
  temp: number;
  feelslike: string;
  conditions: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
  sunrise: string;
  sunset: string;
  moonPhase: number;
  address: string;
  city: string;
  icon: string;
}

export interface HourForecast {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
}

export interface DayForecast {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
}

export interface WeatherStateData {
  current: CurrentWeather;
  hours: HourForecast[];
  days: DayForecast[];
}
