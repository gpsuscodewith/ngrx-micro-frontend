import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login-component/login.component';
import { userReducer } from './store/user.reducer';


@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      StoreModule.forFeature('user', userReducer)
    ],
    exports: [
      LoginComponent
    ]
  })
export class UserModule { }
