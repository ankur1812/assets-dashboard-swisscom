import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from './store/dashboard.effect';
import * as fromReducer from './store/dashboard.reducer';
import { LabeledViewComponent } from './labeled-view/labeled-view.component';
import { StatsComponent } from './stats/stats.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Remove

import { RamPipe } from '../pipes/ram.pipe';
// import { UserEmailPipe } from '../pipes/user_from_email.pipe';

@NgModule({
  declarations: [
    AssetDashboardComponent,
    AssetCardComponent,
    RamPipe,
    // UserEmailPipe,
    LabeledViewComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,    
    // FontAwesomeModule,
		StoreModule.forFeature('dashboard', fromReducer.reducer),
		EffectsModule.forFeature([DashboardEffects]),
    DashboardRoutingModule
  ]
})
export class DashboardModule { 
  // // Logger for checking Lazy Loading
  // constructor() {console.log("Dashboard Module Loaded")}
}
