import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlatnetsComponent } from './components/planets/platnets.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { DetailsComponent } from './components/details/details.component';
import { ChartComponent } from './components/chart/chart.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatnetsComponent,
    VehiclesComponent,
    DetailsComponent,
    ChartComponent,
    PlanetDetailsComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
