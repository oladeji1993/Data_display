import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  constructor(
    private DataService: DataService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private sub: any;
  idParam: string = "";
  planets
  
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
      this.planets = data
      console.log(this.planets)
    })
  }

}
