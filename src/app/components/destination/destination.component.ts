import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/models';
import planetsData  from '../../../assets/json/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  planets: Planet[] = planetsData.destinations
  planetNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  changePlanet(planet:number){
    
    this.planetNumber = planet
  }

}
