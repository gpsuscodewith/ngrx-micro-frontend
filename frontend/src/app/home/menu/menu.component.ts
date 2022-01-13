import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { getIsLoggedInSel } from 'src/app/store/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedIn:boolean;
  isloggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.isloggedIn$ = this.store.select(getIsLoggedInSel);
  }

  logOut(): void {
    this.isLoggedIn = false;
  }

}
