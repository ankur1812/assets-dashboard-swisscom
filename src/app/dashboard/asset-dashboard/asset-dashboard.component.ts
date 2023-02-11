import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Asset } from 'src/app/interfaces/asset';
import {FindAll} from '../store/dashboard.action'
import {assets} from '../store/dashboard.reducer'

@Component({
  selector: 'app-asset-dashboard',
  templateUrl: 'asset-dashboard.component.html',
  styles: []
})
export class AssetDashboardComponent implements OnInit {
  apiValue: Asset[] = [];

  constructor(private store: Store<any>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new FindAll());
    this.store.pipe(select(assets)).subscribe(d => (this.apiValue = d));
  }

}
