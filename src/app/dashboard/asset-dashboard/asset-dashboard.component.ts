import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Asset } from 'src/app/interfaces/asset';
import {FindAll} from '../store/dashboard.action'
import {assets, DashboardState} from '../store/dashboard.reducer'

@Component({
  selector: 'app-asset-dashboard',
  templateUrl: 'asset-dashboard.component.html',
  styleUrls: ['asset-dashboard.component.css']
})
export class AssetDashboardComponent implements OnInit {
  assets: Asset[] = [];
  results: Asset[] = [];
  searchStr: string = "";

  constructor(private store: Store<DashboardState>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new FindAll());
    this.store.pipe(select(assets)).subscribe(data => {this.assets = data; this.results= data});
  }

  filterResults(): void {
    let searchStr: string = this.searchStr.toUpperCase();
    let searchAttribs: string[] = ['name', 'location', 'owner', 'createdBy', 'status'];
    if (!searchStr) this.assets = [...this.results];
    else {
      this.assets = this.results.filter( (asset:any) => {
        return !!asset && searchAttribs.some( (attr:string) => asset[attr]?.toUpperCase().includes(searchStr))
      })  
    }
  }

}
