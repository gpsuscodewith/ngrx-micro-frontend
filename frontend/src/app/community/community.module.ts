import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { communityReducer } from './store/community.reducer';
import { CommunityListComponentComponent } from './community-list-component/community-list-component.component';
import { CommunityEffects } from './store/community.effects';

@NgModule({
  declarations: [
    CommunityListComponentComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('community', communityReducer),
    EffectsModule.forFeature([CommunityEffects])
  ],
  exports: [
    CommunityListComponentComponent
  ]
})
export class CommunityModule { }
