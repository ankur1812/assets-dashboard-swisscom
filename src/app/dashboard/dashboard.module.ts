import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from './store/dashboard.effect';
import * as fromReducer from './store/dashboard.reducer';

@NgModule({
  declarations: [
    AssetDashboardComponent,
    AssetCardComponent
  ],
  imports: [
    CommonModule,    
		/* NgRx */
		StoreModule.forFeature('dashboard', fromReducer.reducer),
		EffectsModule.forFeature([DashboardEffects]),
    // Router
    DashboardRoutingModule
  ]
})
export class DashboardModule { 
  // // Logger for checking Lazy Loading
  // constructor() {console.log("Dashboard Module Loaded")}
}
