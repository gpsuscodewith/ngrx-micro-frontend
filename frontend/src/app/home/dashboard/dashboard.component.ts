import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatalogListComponentComponent } from '../../catalog/catalog-list-component/catalog-list-component.component';
import { UserState } from 'src/app/user/store/user.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedComic: string;

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
  }

  setSelectedComic(issueNumber: string): void {
    console.log('The issue number is ' + issueNumber);
    this.selectedComic = issueNumber;
  }
}
