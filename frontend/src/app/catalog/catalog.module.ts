import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { catalogReducer } from './store/catalog.reducer';
import { CatalogEffects } from './store/catalog.effects';
import { CatalogListComponentComponent } from './catalog-list-component/catalog-list-component.component';


@NgModule({
  declarations: [
    CatalogListComponentComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', catalogReducer),
    EffectsModule.forFeature([CatalogEffects])
  ],
  providers: [
    CatalogEffects
  ],
  exports: [
    CatalogListComponentComponent
  ]
})
export class CatalogModule { }
