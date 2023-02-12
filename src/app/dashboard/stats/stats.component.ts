import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Asset } from 'src/app/interfaces/asset';
import { RamPipe } from 'src/app/pipes/ram.pipe';

@Component({
  selector: 'dashboard-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input('assets')
  assets: Asset[] = []

  totalAssets: number = 0;
  totalCPU: number = 0;
  totalMemory: number = 0;
  up: number = 0;
  down: number = 0;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.assets.forEach( asset => {
      if (!!asset) {
        this.totalAssets++;
        this.totalCPU += asset.cpu;
        this.totalMemory += asset.ram;
        if(asset.status == 'Running') this.up++;
      }
    })
  }

}
