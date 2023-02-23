import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fader, fadeTransition } from 'src/app/route-animations';
import { Planet } from 'src/models';
import planetsData  from '../../../assets/json/data.json';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  animations: [
    fadeTransition
  ]
})
export class DestinationComponent implements OnInit {
  planets: Planet[] = planetsData.destinations
  planetNumber = 0
  animation = "fadeOff"

  constructor() { }

  ngOnInit(): void {
  }

  async changePlanet(planet:number){
    this.toggle()
    await this.delay()
    this.planetNumber = planet
    this.toggle()
  }

  get play(){
    return this.animation
  }

  toggle(){
    if (this.animation === "fadeOn"){
      this.animation = "fadeOff"
    }
    else{
      this.animation = "fadeOn"
    }
  }

  delay() {
    return new Promise( resolve => setTimeout(resolve, 200) );
  }
}
