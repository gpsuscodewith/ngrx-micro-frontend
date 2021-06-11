import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedIn:boolean;
  constructor() { 
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
  }
  
  logOut(): void {
    this.isLoggedIn = false;
  }

}
