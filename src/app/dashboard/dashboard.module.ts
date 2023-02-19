import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from './store/dashboard.effect';
import * as fromReducer from './store/dashboard.reducer';
import { LabeledViewComponent } from './labeled-view/labeled-view.component';
import { StatsComponent } from './stats/stats.component';

import { RamPipe } from '../pipes/ram.pipe';
import { AssetDetailsComponent } from './details-page/asset-details/asset-details.component';
import { AssetApiService } from './services/asset-api.service';
import { SkeletelDivComponent } from './skeleton-animations/skeletel-div/skeletel-div.component';

@NgModule({
  declarations: [
    AssetDashboardComponent,
    AssetCardComponent,
    RamPipe,
    LabeledViewComponent,
    StatsComponent,
    SkeletelDivComponent,
    AssetDetailsComponent
  ],
  providers: [AssetApiService],
  imports: [
    CommonModule,    
    FormsModule,
		StoreModule.forFeature('dashboard', fromReducer.reducer),
		EffectsModule.forFeature([DashboardEffects]),
    DashboardRoutingModule
  ]
})
export class DashboardModule { 
  // // Logger for checking Lazy Loading
  // constructor() {console.log("Dashboard Module Loaded")}
}
