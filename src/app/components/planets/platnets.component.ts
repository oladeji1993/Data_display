import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-platnets',
  templateUrl: './platnets.component.html',
  styleUrls: ['./platnets.component.css']
})
export class PlatnetsComponent implements OnInit { 

  planets = []

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private DataService: DataService
  ) { }


  getplanet(){
    this.DataService.getPlanet().subscribe((data: any)=>{
      this.planets = data.results
      console.log(this.planets)
    })
  }

  ngOnInit(): void {
    this.getplanet()
  }

  openPlanetDetails(url: string){
    console.log(url)
    this.router.navigate(["planetDetails"], {queryParams: {url: url}});
  }



}
