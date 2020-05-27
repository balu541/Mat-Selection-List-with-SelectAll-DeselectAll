import { Pipe, PipeTransform, Inject } from '@angular/core';
import {DataService, typesOfShoes} from './model'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(shoes: typesOfShoes[], searchbar: string): typesOfShoes[] {
    if (!shoes || !searchbar) {
        return shoes;
    }

    return shoes.filter(shoe =>
        shoe.name.toLowerCase().indexOf(searchbar.toLowerCase()) !== -1);
}
}
