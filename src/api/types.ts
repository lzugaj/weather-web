export type ConditionResponse = {
  text: string;
  icon: string;
  code: number;
};

export type CurrentResponse = {
  cloud: number;
  condition: ConditionResponse;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
};

export type LocationResponse = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

export type DayResponse = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: ConditionResponse;
};

export type AstroResponse = {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

export type HourResponse = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  will_it_snow: number;
  is_day: number;
  vis_km: number;
  vis_miles: number;
  chance_of_rain: number;
  chance_of_snow: number;
  gust_mph: number;
  gust_kph: number;
  condition: ConditionResponse;
};

export type ForecastDayResponse = {
  date: string;
  date_epoch: number;
  day: DayResponse[];
  astro: AstroResponse[];
  hour: HourResponse[];
};

export type ForecastResponse = {
  forecastday: ForecastDayResponse[];
};

export type CurrentWeatherResponse = {
  current: CurrentResponse;
  location: LocationResponse;
  forecast: ForecastResponse;
};
