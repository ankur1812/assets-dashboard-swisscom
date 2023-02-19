import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input('fullscreen')
  fullscreen: boolean = false;  

  ramInGb: string = '';
  owner: string = '';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.ramInGb = this.assetInfo?.ram ? this.assetInfo?.ram / (1024 * 1024 * 1024) + ' GB' : ''
  this.owner = this.assetInfo?.owner ? this.assetInfo?.owner?.replace('.' ,' ').split('@')[0] : ''
  }

  goToDetailsPage(id: any): void {
    this.router.navigate(['dashboard/details/' + id]);
  }
}
