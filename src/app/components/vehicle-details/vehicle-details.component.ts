import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(
    private DataService: DataService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private sub: any;
  idParam: string = "";
  vehicles
  
  ngOnInit() {
    this.sub = this.ActivatedRoute.queryParams.subscribe(params => {
      console.log(params)
      if(params && params.url) { 
        this.getInfo(params.url) 
      } else {
        this.router.navigate(['/']); 
      }
    });
  }
  
  getInfo(sys_id: string){
    console.log(sys_id)
    this.DataService.getOnePerson(sys_id).subscribe((data: any)=>{
      this.vehicles = data
      console.log(this.vehicles)
    })
  }

}
