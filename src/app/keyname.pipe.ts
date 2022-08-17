import {  Pipe, PipeTransform } from '@angular/core';
import { Clouds, Sys, WeatherResponse, Wind,Main } from './Iweather';


@Pipe({
  name: 'Windkeyname'
})
export class WindKeynamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof Wind = args[0]
    switch (value) {
      case 'deg':
        return  "Wind Direction"
        case 'speed':
        return  "Wind Speed"
        default:
          return value
    }
  }

}

@Pipe({
  name: 'CloudKeyname'
})
export class CloudKeynamePipe implements PipeTransform{

  transform(value: any, ...args: any[]): unknown {
    const newKeyName = 'Clouds'
    return newKeyName
    
    }
    
  }

  @Pipe({
    name: 'MianKeyname'
  })
  export class MainKeynamePipe implements PipeTransform {
  
    transform(value: any, ...args: any[]): unknown {
      const key: keyof Main = args[0]
      switch (value) {
        case 'feels_like':
          return "Feels like"
        case 'temp_min':
          return "Temp min"
        case 'temp_max':
          return "temp max"
          default:
            return value 
      }
    }
  }