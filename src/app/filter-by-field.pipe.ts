import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField'
})
export class FilterByFieldPipe implements PipeTransform {

  transform(array: any[], search: string, field: string): any[] {
    return array.filter(item => item[field] && item[field].toLowerCase().includes(search.toLowerCase()));
  }

}
