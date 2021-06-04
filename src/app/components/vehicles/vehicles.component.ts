import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles = []
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getVehicle()
  }

  
  getVehicle(){
    this.DataService.getVehicle().subscribe((data: any)=>{
      this.vehicles = data.results
      console.log(this.vehicles)
    })
  }

  openVehicleDetails(url: string){
    console.log(url)
    this.router.navigate(["vehicleDetails"], {queryParams: {url: url}});
  }


}
