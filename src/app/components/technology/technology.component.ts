import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/models';
import techData from "../../../assets/json/data.json"

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technology: Technology[] = techData.technology
  techNumber = 0

  constructor() {}

  ngOnInit(): void {

  }

  changeTech(tech: number){
    this.techNumber = tech
  }

}
