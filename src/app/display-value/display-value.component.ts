import { Component, Input, OnInit } from '@angular/core';
import {CloudKeynamePipe} from '../keyname.pipe'
import{Clouds, Main, Sys, WeatherResponse, Wind} from '../Iweather'

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.css'],
  
  

})
export class DisplayValueComponent implements OnInit {
  @Input() title?: string
  @Input() value?: string 
  


  constructor() { }

  ngOnInit(): void {
  }



}
