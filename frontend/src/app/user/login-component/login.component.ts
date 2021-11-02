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

  selectedUser$: Observable<User>;

  private submittedUsername: string;

  loginForm = this.formBuilder.group({
    userName: '',
    password: ''
  });

  constructor(
    private router: Router,
    private store: Store<User>,
    private userService: UserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.selectedUser$ = this.store.select(getUser);
  }

  cancel() {
  }

  onSubmit(): void {
    console.log('Inside onSubmit() with a value for this.loginForm.value["userName"] of ' + this.loginForm.value['userName']);
    this.login(this.loginForm.value['userName'])
  }

  login(userName: string) {
    console.log('Inside login with a value of userName being ' + userName);
    this.submittedUsername = userName;
    this.store.dispatch(findUserByUsername({ userName: this.submittedUsername }));
    this.selectedUser$.subscribe(user => {
      console.log('Inside this.selectedUser$.subscribe with the value of ' + user);
      this.onUserLogin.emit(user.id);
    });
  }
}
