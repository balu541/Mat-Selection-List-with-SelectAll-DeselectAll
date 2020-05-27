import { Injectable } from '@angular/core';
//
export type  typesOfShoes= {
    id: string;
    name: string;
}
//
@Injectable()
export class DataService {
    
    getData() {
        return <typesOfShoes[]>[
            {id:"1",name:'Boots'}, 
            {id:"2",name:'Clogs'}, 
            {id:"3",name:'Loafers'}, 
            {id:"4",name:'Moccasins'}, 
            {id:"5",name:'Sneakers'}
        ];
}
}