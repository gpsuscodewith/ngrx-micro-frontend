import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getIsLoggedIn, loggedInSuccess } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/state/app.state';
import { LoginComponent } from 'src/app/user/login-component/login.component';
import { getIsLoggedInSel } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  subscription: Subscription;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    console.log('dispatching getLogIn');
    this.store.dispatch(getIsLoggedIn());
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(getIsLoggedInSel);
  }

  subscribeToEmitter(componentRef) {
    console.log('Inside subscribeToEmitter');
    if (!(componentRef instanceof LoginComponent)) {
      console.log('Condition for return hit in subscribeToEmitter');
      return;
    }
    console.log('Prior to bind');
    const child: LoginComponent = componentRef;
    child.loginEvent.subscribe( () => {
      console.log('Login event caught in shell');
      console.log('dispatching loggedInSuccess()');
      this.store.dispatch(loggedInSuccess());
    });
  }

  unsubscribe() {
    console.log('Inside unsubscribe on app');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
