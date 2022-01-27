import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponentComponent } from './catalog/catalog-list-component/catalog-list-component.component';
import { CommunityListComponentComponent } from './community/community-list-component/community-list-component.component';
import { CommunityTradeComponent } from './community/community-trade/community-trade.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ShellComponent } from './home/shell/shell.component';
import { TradeComponent } from './home/trade/trade.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './user/login-component/login.component'

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'catalog', component: CatalogListComponentComponent},
      {path: 'community', component: CommunityListComponentComponent},
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'trade', component: TradeComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
