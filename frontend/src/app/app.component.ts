import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from './user/login-component/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  subscription: Subscription;

  subscribeToEmitter(componentRef) {
    console.log('Inside subscribeToEmitter');
    if (!(componentRef instanceof LoginComponent)) {
      return;
    }
    console.log('Prior to bind');
    const child: LoginComponent = componentRef;
    child.loginEvent.subscribe( () => {
      console.log('Login event caught in shell');
    });
  }

  unsubscribe() {
    console.log('Inside unsubscribe on app');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
