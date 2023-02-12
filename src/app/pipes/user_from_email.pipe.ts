import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user_from_email'
})
export class UserEmailPipe implements PipeTransform {

  transform(email: string = ''): unknown {
    return email?.split('@')[0];
  }
  
}
