import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/interfaces/asset';
// import { RamPipe } from 'src/app/pipes/ram.pipe';

@Component({
  selector: 'app-asset-card',
  templateUrl: 'asset-card.component.html',
  styleUrls: ['asset-card.component.css']
})
export class AssetCardComponent implements OnInit {
  @Input('info')
  assetInfo: Asset | null = null;
  
  ramInMb: string = '';
  owner: string = '';

  constructor() { }

  ngOnInit(): void {
    this.ramInMb = this.assetInfo?.ram ? this.assetInfo?.ram / (1024 * 1024) + ' MB' : ''
    this.owner = this.assetInfo?.owner ? this.assetInfo?.owner.split('@')[0] : ''
  }

}
