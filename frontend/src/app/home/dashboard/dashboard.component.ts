import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CatalogListComponentComponent } from '../../catalog/catalog-list-component/catalog-list-component.component';
import { UserState } from 'src/app/user/store/user.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUserId: string;
  selectedComic: string;
  selectedCollector: string;

  constructor(
    private store: Store<UserState>,
    private router: Router,
    private activedRoute: ActivatedRoute) {

    }

  ngOnInit(): void {
  }

  setSelectedComic(issueNumber: string): void {
    console.log('The issue number is ' + issueNumber);
    this.selectedComic = issueNumber;
  }

  setSelectedCollector(collectorId: string): void {
    console.log('The collectorId is ' + collectorId);
    this.selectedCollector = collectorId;
    this.router.navigate(['/trade', {proposerId: this.currentUserId, partnerId: this.selectedCollector}]);
  }

  setLoggedInUser(userId: string): void {
    console.log('The logged in user id is ' + userId);
  }
}
