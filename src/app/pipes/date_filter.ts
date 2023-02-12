import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date): unknown {
    // Notes: This filter was intended to be used but adding them would have required more code changes.
    // The value was currently being sent inside the generic "labeled-view" compoenent so it adding the pipe required unncecessary customizations.
    return date.toLocaleTimeString()
  }
  
}
