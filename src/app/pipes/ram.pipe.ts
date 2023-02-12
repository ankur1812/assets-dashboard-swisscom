import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ram'
})
export class RamPipe implements PipeTransform {

  transform(value:number = 0): unknown {
    return Math.floor(value / (1024*1024)) + ' MB';
  }
  
}
