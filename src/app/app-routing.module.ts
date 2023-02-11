import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( x=> x.DashboardModule)
  },
  {
    path: '**',
    loadChildren: () => import('./dashboard/dashboard.module').then( x=> x.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot([]), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
