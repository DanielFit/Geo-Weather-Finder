import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import{WeatherResponse} from './Iweather'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private WeatherUrl: string = environment.weatherapiurl;
  private _weather:Subject<WeatherResponse> = new Subject<WeatherResponse>()
  weather: Observable<WeatherResponse> = this._weather.asObservable()

  constructor(private http: HttpClient) { }

  getWeather(lat:string, lon:string): void{
     this.http.get<WeatherResponse>(`${this.WeatherUrl}?lat=${lat}&lon=${lon}`).subscribe(val => this._weather.next(val))
  }

  
}
