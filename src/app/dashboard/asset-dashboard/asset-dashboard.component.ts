import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Asset } from 'src/app/interfaces/asset';
import {FindAll} from '../store/dashboard.action'
import {assets} from '../store/dashboard.reducer'

@Component({
  selector: 'app-asset-dashboard',
  templateUrl: 'asset-dashboard.component.html',
  styleUrls: ['asset-dashboard.component.css']
})
export class AssetDashboardComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private store: Store<any>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new FindAll());
    this.store.pipe(select(assets)).subscribe(data => (this.assets = data));
  }

}
