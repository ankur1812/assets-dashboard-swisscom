import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { AssetDetailsComponent } from './details-page/asset-details/asset-details.component';

const routes: Routes = [
  { path: '', component: AssetDashboardComponent, children: [
    {path: '', component: AssetCardComponent}
  ] },
  { path: 'details/:id', component: AssetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
