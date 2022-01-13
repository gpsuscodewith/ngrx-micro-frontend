import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { findUserByUsername} from '../store/actions/user.actions';
import { getUser } from '../store/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onUserLogin = new EventEmitter<string>()

  loginEvent = new EventEmitter();

  selectedUser$: Observable<User>;

  private submittedUsername: string;

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private router: Router,
    private store: Store<User>,
    private userService: UserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    console.log('Inside LoginComponent::ngOnInit()');
    this.selectedUser$ = this.store.select(getUser);
  }

  cancel() {
  }

  logout() {
    console.log('logout() called');
  }

  onSubmit(): void {
    console.log('Inside onSubmit() with a value for this.loginForm.value["username"] of ' + this.loginForm.value['username']);
    let userName = this.loginForm.value['username'] !== '' ? this.loginForm.value['username'] : 'jedi';
    console.log('After setting the value of userName to ' + userName);
    this.login(userName);
  }

  login(userName: string) {
    console.log('Inside login with a value of userName being ' + userName);
    this.submittedUsername = userName;
    console.log('Dispatching findUserByUsername with a value of ' + this.submittedUsername);
    this.store.dispatch(findUserByUsername({ userName: this.submittedUsername }));
    this.selectedUser$.subscribe(user => {
      console.log('Inside this.selectedUser$.subscribe with the value of ' + user);
      this.onUserLogin.emit(user.id);
      console.log("emitting loginEvent");
      this.loginEvent.emit();
    });
  }
}
