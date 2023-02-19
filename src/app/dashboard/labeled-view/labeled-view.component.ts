import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'labeled-view',
  templateUrl: 'labeled-view.component.html',
  styleUrls: ['labeled-view.component.css']
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
  }

}
