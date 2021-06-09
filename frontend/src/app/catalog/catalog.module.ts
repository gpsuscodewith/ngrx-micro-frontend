import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './catalog.reducer';
import { CatalogListComponentComponent } from './catalog-list-component/catalog-list-component.component';


@NgModule({
  declarations: [
    CatalogListComponentComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', reducer)
  ],
  exports: [
    CatalogListComponentComponent
  ]
})
export class CatalogModule { }
