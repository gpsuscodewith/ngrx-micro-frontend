import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { catalogReducer } from './store/catalog.reducer';
import { CatalogEffects } from './store/catalog.effects';
import { CatalogListComponentComponent } from './catalog-list-component/catalog-list-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogListComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
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
