import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatnetsComponent } from './components/planets/platnets.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { DetailsComponent } from './components/details/details.component';
import { ChartComponent } from './components/chart/chart.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path:'planet',
    component: PlatnetsComponent
  },

  
  {
    path:'vehicles',
    component: VehiclesComponent
  },

  {
    path:'chart',
    component: ChartComponent
  },

  {
    path:'details',
    component: DetailsComponent 
  },

  {
    path:'planetDetails',
    component: PlanetDetailsComponent
  },

  {
    path:'vehicleDetails',
    component: VehicleDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
