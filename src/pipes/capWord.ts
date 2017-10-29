import {Injectable, Pipe} from '@angular/core';

@Pipe({
 name: 'capWord'
})
@Injectable()
export class CapWord {
  transform(value, args) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
