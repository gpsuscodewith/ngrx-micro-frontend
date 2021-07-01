import { Component, OnInit } from '@angular/core';
import { CatalogListComponentComponent } from '../../catalog/catalog-list-component/catalog-list-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedComic(issueNumber: string): void {
    console.log('The issue number is ' + issueNumber);
  }
}
