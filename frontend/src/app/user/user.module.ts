import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login-component/login.component';
import { userReducer } from './store/user.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      StoreModule.forFeature('users', userReducer)
    ],
    exports: [
      LoginComponent
    ]
  })
export class UserModule { }
