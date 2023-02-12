import { Component, OnChanges, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from 'src/app/interfaces/asset';
import { FindAll } from '../../store/dashboard.action';
import { assets } from '../../store/dashboard.reducer';

@Component({
  selector: 'app-asset-details',
  templateUrl: 'asset-details.component.html',
  styleUrls: [
    'asset-details.component.css',
    '../../asset-card/asset-card.component.css'
  ]
})
export class AssetDetailsComponent implements OnInit {
    assetId: number = -1;
    assetInfo: Asset | null | undefined = undefined; 
    parentAsset: Asset | undefined = undefined; 
    childAsset: Asset | undefined = undefined; 
    notFound: boolean | null = false;
    ramInGb: string = "";
    owner: string = "";
    creator: string = "";
  
    constructor(private store: Store<any>, private actRoute: ActivatedRoute, private router: Router) { }
    
    ngOnInit(): void {
      this.assetId = parseInt(this.actRoute.snapshot.params['id']);
      // alert(postid);

      this.store.dispatch(new FindAll());
      this.store.pipe(select(assets)).subscribe(data => {
        this.assetInfo = data.find( a=> !!a && a.id == this.assetId);
        if (this.assetInfo) {
          this.notFound = false; 
          this.ramInGb = this.assetInfo.ram / (1024 * 1024 * 1024) + ' GB';
          data.some( (asset: Asset) => {
            if (!!asset) {
              if (asset.parentId === this.assetId) this.childAsset = asset;
              else if (asset.id === this.assetInfo?.parentId) this.parentAsset = asset;
            }
            if (this.parentAsset && this.childAsset) return true;  
            return false;
            })
          }
          else if (data.length > 0 )this.notFound = true; 
        })
      }

      goToDetailsPage(id: any): void {
        // Using location.href because the urlParam was not getting is updated.
        location.href = '/dashboard/details/' + id;

        // Below code needs more configurtion w.r.t ActivatedRoutes

        // this.router.navigate(['dashboard/details/' + id]);
        // this.router.navigate(['dashboard/details/' + id], {replaceUrl: true, skipLocationChange: false});
      }
    
  
  }
  