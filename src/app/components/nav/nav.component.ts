import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],   
})

export class NavComponent implements OnInit {
  mobileMenu = document.getElementsByClassName("mobile")
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string){
    this.router.navigate([url])
  }

  toggleMobileMenu(){
    this.mobileMenu[0].classList.toggle("active")
  }
  
}
