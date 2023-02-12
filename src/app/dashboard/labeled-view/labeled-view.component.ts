import { Component, Input, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/angular-fontawesome/icon/duotone-icon.component';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


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
    // if(this.label == 'ram' && this.value) this.value = (this.value/(1024 * 1024)) + ' MB'
  }

}
