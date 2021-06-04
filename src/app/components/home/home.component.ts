import { resp } from './../../model/model';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  crowds = [];

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private DataService: DataService
    
    ) { }

    getpeople(){
      this.DataService.getPeople().subscribe((data: any)=>{
        this.crowds = data.results
        console.log(this.crowds)
      })
    }

  ngOnInit(): void {
    this.getpeople()
  }
  

  platnet(){
    this.router.navigate(['planet'])
  }

  openPeopleDetails(url: string){
    console.log(url)
    this.router.navigate(["details"], {queryParams: {url: url}});
  }


}
