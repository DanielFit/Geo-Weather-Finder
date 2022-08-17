import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayValueComponent } from './display-value/display-value.component';
import { FirstLetterPipe } from './first-letter.pipe';
import { KeyValueDisplayComponent } from './key-value-display/key-value-display.component';
import { WeatherDisplayPipe } from './weather-display-pipe';
import { weatherDisplayMainPipe } from './weather-display-pipe';
import {weatherDisplayWindPipe} from './weather-display-pipe';
import {weatherDisplayCloudPipe} from './weather-display-pipe';
import {weatherDisplaySysPipe} from './weather-display-pipe';
import { CloudKeynamePipe, WindKeynamePipe, MainKeynamePipe } from './keyname.pipe';
import { MapComponent } from './map/map.component';
import {MaterialAppModule} from './app.material.module'
import { LayoutModule } from '@angular/cdk/layout';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DisplayValueComponent,
    FirstLetterPipe,
    KeyValueDisplayComponent,
    WeatherDisplayPipe,
    weatherDisplayMainPipe,
    weatherDisplayWindPipe,
    weatherDisplayCloudPipe,
    weatherDisplaySysPipe,
    WindKeynamePipe,
    CloudKeynamePipe,
    MainKeynamePipe,
    MapComponent,
  

    

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialAppModule,
    LayoutModule,
   
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






