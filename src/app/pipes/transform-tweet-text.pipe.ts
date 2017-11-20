import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTweetText'
})
export class TransformTweetTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(/\B\#\w+/gi, (x) => {return '<a class="hash-tag" href="https://twitter.com/hashtag/'+x+'?src=hash">'+x+'</a>';}).replace(/\B\@\w+/gi, (x) => {return '<a class="hash-tag" href="https://twitter.com/'+x+'">'+x+'</a>';});
  }

}
