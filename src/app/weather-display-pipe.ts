import { getLocaleDateTimeFormat } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Clouds, Sys, WeatherResponse, Wind } from './Iweather';
import { Main} from './Iweather';

export  function  KelvinToCelcius(k: any): any {
  const kelvinNumber = 273.15
  return k - kelvinNumber;
}

export  function  timeZoneToUtc(t: any): any {
  const UtcNumber = 3600
  return t / UtcNumber;
}

export function MetersPsToKmPh(s: number): any {
  const multiplier = 3.6
  s = s * multiplier
  return s ;
}

export function WindDirectionByDegrees(deg: number): any {
 if (deg < 90) {
  return "North "+deg +"° East"
 };
 if (deg < 180) {
  deg = deg - 90;
  return "East "+deg+"° South"
 };
 if (deg < 270) {
  deg = deg - 180;
  return "South "+deg+"° West"
 };
 if (deg < 360) 
 {
  deg = deg - 270;
  return "West "+deg+"° North"
 };
 
}

export function CloudRating(percentage: number): any {
   { if (percentage < 50)
   return "Clear Skies";
  else
  return "Cloudy"
  };
 }

 export function FogRating(km: number): any {
  { if (km < 1000)
  return "heavy Fog";
  if (km < 5000)
    return "Medium Fog"
  if (km < 7500)
    return "Light Fog"
 else
 return "Clear"
 };
}


 export function MilSecToRealTime(t: any): any {
  const unixTime = t;
  const date = new Date(unixTime * 1000);
  const newText = date.toLocaleTimeString("syd-AU");
  
  return newText;
}


export const roundTo = function(num: number, places: number) {
  const factor = 10 ** places;
  return Math.round(num * factor) / factor;
};






@Pipe({
  name: 'weatherDisplayPipe'
})
export class WeatherDisplayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof WeatherResponse = args[0]
    if (!key) {
      return value
    }
    switch (key) {
      case "visibility":
        var fog = FogRating(value);
        return fog
      case "timezone":
        var Utchours = timeZoneToUtc(value);
          return Utchours += " hours to UCT"
        default:
          return value
          
    }
    
  }

}

@Pipe({
  name: 'weatherDisplayMainPipe'
})
export class weatherDisplayMainPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof Main = args[0]
    if (!key) {
      return value
    }
    switch (key) {
      case "temp": case "feels_like": case "temp_min": case "temp_max":
        var celcius = KelvinToCelcius(value);
        celcius = roundTo(celcius, 0);
        return  celcius += "c"
        case "humidity":
          return value += "%"
        default:
          return value
    }
  }

}

@Pipe({
  name: 'weatherDisplayWindPipe'
})
export class weatherDisplayWindPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof Wind = args[0]
    if (!key) {
      return value
    }
    switch (key) {
      case "speed":
        var speed = MetersPsToKmPh(value);
        speed = roundTo(speed, 0);
        return  speed += "km/h"
        case "deg":
        var direction = WindDirectionByDegrees(value);
        return  direction 
        default:
          return value
    }
  }

}





@Pipe({
  name: 'weatherDisplayCloudPipe'
})
export class weatherDisplayCloudPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof Clouds = args[0]
    if (!key) {
      return value
    }
    switch (key) {
      case "all":
        var cloudRating = CloudRating(value);
        return  cloudRating
        default:
          return value
    }
  }

}

@Pipe({
  name: 'weatherDisplaySysPipe'
})
export class weatherDisplaySysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const key: keyof Sys = args[0]
    if (!key) {
      return value
    }
    switch (key) {
      case "sunrise": case "sunset":
        var time = MilSecToRealTime(value);
        return  time += " (AEST)"
        default:
          return value
    }
  }

}