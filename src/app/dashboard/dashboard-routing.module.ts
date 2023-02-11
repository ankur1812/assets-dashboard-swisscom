import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';

const routes: Routes = [
  { path: '', component: AssetDashboardComponent },
  // { path: 'details', component: AssetDetailsComponent } // TODO- this will route to new details-page module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
