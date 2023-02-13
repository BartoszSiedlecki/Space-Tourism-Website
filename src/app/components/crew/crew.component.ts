import { Component, OnInit } from '@angular/core';
import crewData from '../../../assets/json/data.json'
import { Crewmate } from 'src/models';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  crew: Crewmate[] = crewData.crew
  crewMateNumber = 0

  constructor() {
    console.log(this.crew)
  }

  ngOnInit(): void {
  }

  changeCrewmate(crewmate: number){
    this.crewMateNumber = crewmate
  }

}
