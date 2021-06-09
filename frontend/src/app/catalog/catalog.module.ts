import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './catalog.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', reducer)
  ]
})
export class CatalogModule { }
