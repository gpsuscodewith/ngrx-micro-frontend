import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponentComponent } from './catalog/catalog-list-component/catalog-list-component.component';
import { CommunityListComponentComponent } from './community/community-list-component/community-list-component.component';
import { ShellComponent } from './home/shell/shell.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'catalog', component: CatalogListComponentComponent},
      {path: 'community', component: CommunityListComponentComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
