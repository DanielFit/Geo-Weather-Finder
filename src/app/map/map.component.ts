
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map?: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  constructor(private weatherService: WeatherService) {
    weatherService.weather.subscribe(val=> this.setLatLon(val.coord.lat, val.coord.lon))
   }
  ngOnInit() {
   
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat],
        accessToken: environment.mapbox.accessToken
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('click',(e) => {
      this.weatherService.getWeather(e.lngLat.lat.toString(),e.lngLat.lng.toString())
    })
  }
setLatLon(lat: number, lon:number){
  this.map?.jumpTo({
    center: [lon,lat]
  })
}


}



