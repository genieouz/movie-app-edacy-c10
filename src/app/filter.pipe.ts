import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], search: string): any[] {
    return array.filter(item => JSON.stringify({ item }).includes(search));
  }

}
