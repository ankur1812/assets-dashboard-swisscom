import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';

const routes: Routes = [
  { path: '', component: AssetDashboardComponent, children: [
    {path: '', component: AssetCardComponent}
  ] },
  // { path: 'details', component: AssetDetailsComponent } // TODO- this will route to new details-page module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
