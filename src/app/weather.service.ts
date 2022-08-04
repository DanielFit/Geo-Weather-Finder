import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import{WeatherResponse} from './Iweather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private WeatherUrl: string = "http://localhost:3000/weather";

  constructor(private http: HttpClient) { }

  getWeather(lat:string, lon:string): Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>(`${this.WeatherUrl}?lat=${lat}&lon=${lon}`)
  }
}
