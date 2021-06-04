import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit(): void {
  }

  planet(){
    this.router.navigate(['planet'])
  }

  vehicle(){
    this.router.navigate(['vehicles'])
  }

  chart(){
    this.router.navigate(['chart'])
  }
}
