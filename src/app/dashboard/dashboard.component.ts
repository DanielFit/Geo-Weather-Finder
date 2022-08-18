import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import {WeatherService} from '../weather.service'
import{Clouds, Main, Sys, WeatherResponse, Wind} from '../Iweather'








@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weather?: WeatherResponse
  subscriptions: Subscription []= []
  weatherDisplayValues: (keyof WeatherResponse)[] = ['name','timezone', 'visibility', ]
  weatherDisplayMainPipe: (keyof Main)[] = ['temp','feels_like','temp_min', 'temp_max','pressure','humidity']
  weatherDisplayWindPipe: (keyof Wind)[]= ['speed','deg']
  weatherDisplayCloudPipe:(keyof Clouds)[]= ['all']
  weatherDisplaySysPipe:(keyof Sys)[]= ['sunrise','sunset']
  cloudDisplayValues: (keyof Clouds)[] = ['all' ]
  windDisplayValues: (keyof Wind)[] = ['deg','speed' ]
  mainDisplayValues: (keyof Main)[] = ['temp','feels_like','temp_min','temp_max','humidity']
  sysDisplayValues: (keyof Sys)[] = ['sunrise','sunset'] 
  weatherForm = new FormGroup({ 
  lat: new FormControl('', Validators.required),
  lon: new FormControl('', Validators.required),
  displayWindOnly: new FormControl (false),
  displayMainOnly: new FormControl (false),
  displayCloudsOnly: new FormControl (false),
  displaySysOnly: new FormControl (false),

}) 


  constructor(private weatherService:WeatherService) {
    this.weatherService.weather.subscribe(val => {this.weather = val
    this.weatherForm.controls.lat.setValue(val.coord.lat.toString())
    this.weatherForm.controls.lon.setValue(val.coord.lat.toString())})
   }
  

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    this.weatherService.getWeather(this.weatherForm.value.lat??'', this.weatherForm.controls.lon.value??'')
    
   
  }


  isObject(value:any) {
    return typeof value === "object"
  }


}


