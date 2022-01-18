import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { communityReducer } from './store/community.reducer';
import { CommunityListComponentComponent } from './community-list-component/community-list-component.component';
import { CommunityEffects } from './store/community.effects';
import { CollectorDetailComponent } from './collector-detail/collector-detail.component';
import { CommunityGridComponent } from './community-grid/community-grid.component';
import { CommunityTradeComponent } from './community-trade/community-trade.component';
@NgModule({
  declarations: [
    CommunityListComponentComponent,
    CollectorDetailComponent,
    CommunityGridComponent,
    CommunityTradeComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('community', communityReducer),
    EffectsModule.forFeature([CommunityEffects]),
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    CommunityListComponentComponent,
    CollectorDetailComponent,
    CommunityGridComponent
  ]
})
export class CommunityModule { }
