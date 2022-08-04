import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import {WeatherService} from '../weather.service'
import{WeatherResponse} from '../Iweather'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weather?: WeatherResponse
  subscriptions: Subscription []= []
  weatherForm = new FormGroup({ 
  lat: new FormControl('', Validators.required),
  lon: new FormControl('', Validators.required),
  displayWindOnly: new FormControl (false),
  displayMainOnly: new FormControl (false),
  displayCloudsOnly: new FormControl (false),
  displaySunOnly: new FormControl (false),
 
}) 

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    this.weatherService.getWeather(this.weatherForm.controls.lat.value??'', this.weatherForm.controls.lon.value??'').subscribe(weather => {this.weather =weather
    console.log(JSON.stringify(weather))})
  }

  isObject(value:any) {
    return typeof value === "object"
  }


  
 

}
