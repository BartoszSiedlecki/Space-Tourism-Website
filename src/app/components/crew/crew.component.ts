import { Component, OnInit } from '@angular/core';
import crewData from '../../../assets/json/data.json'
import { Crewmate } from 'src/models';
import { fadeTransition } from 'src/app/route-animations';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
  animations: [
    fadeTransition
  ]
})
export class CrewComponent implements OnInit {
  crew: Crewmate[] = crewData.crew
  crewMateNumber = 0
  animation = "fadeOff"

  constructor() { }

  ngOnInit(): void {
  }

  async changeCrewmate(crewmate: number){
    this.toggle()
    await this.delay()
    this.crewMateNumber = crewmate
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
