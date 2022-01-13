import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login-component/login.component';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      StoreModule.forFeature('users', userReducer),
      EffectsModule.forFeature([UserEffects]),
    ],
    exports: [
      LoginComponent
    ]
  })
export class UserModule { }
