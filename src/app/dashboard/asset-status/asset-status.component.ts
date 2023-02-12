import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'asset-status',
  templateUrl: 'asset-status.component.html',
  styleUrls: ['asset-status.component.css']
})
export class LabeledViewComponent implements OnInit {
  @Input('icon')
  icon: string = '';

  @Input('label')
  label: string = '';

  @Input('value')
  value: string | Date | number | undefined = '';

  constructor() { }

  ngOnInit(): void {
    // if(this.label == 'ram' && this.value) this.value = (this.value/(1024 * 1024)) + ' MB'
  }

}
