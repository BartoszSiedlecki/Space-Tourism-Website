import { Component, OnInit } from '@angular/core';
import { fadeTransition } from 'src/app/route-animations';
import { Technology } from 'src/models';
import techData from "../../../assets/json/data.json"

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  animations: [
    fadeTransition
  ]
})
export class TechnologyComponent implements OnInit {
  technology: Technology[] = techData.technology
  techNumber = 0
  animation = "fadeOff"

  constructor() {}

  ngOnInit(): void {

  }

  async changeTech(tech: number){
    this.toggle()
    await this.delay()
    this.techNumber = tech
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
