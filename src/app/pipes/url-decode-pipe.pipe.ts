import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlDecodePipe'
})
export class UrlDecodePipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return decodeURIComponent(value.replace(/\+/g, '%20'));
  }

}
