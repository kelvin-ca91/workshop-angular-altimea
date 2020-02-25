import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args: boolean): any {
    if(!args){
      return value;
    }

    const lower = value.toLowerCase();
    const arrLower = lower.split(' ');
    let title = '';
    for (const item of arrLower) {
      title += `${item.charAt(0).toUpperCase()}${item.slice(1)} `  
    }
    return title;
  }

}
