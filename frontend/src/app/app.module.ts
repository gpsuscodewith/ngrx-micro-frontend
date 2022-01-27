import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { appReducer } from './store/app.reducer';
import { TradeComponent } from './home/trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    DashboardComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    CommunityModule,
    UserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
