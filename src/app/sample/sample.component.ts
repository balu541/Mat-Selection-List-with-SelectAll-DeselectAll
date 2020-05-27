import { Component, OnInit, Inject, ViewChild, Input, Output, SimpleChanges, SimpleChange } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {DataService, typesOfShoes } from './model'
import { MatOption } from '@angular/material/core';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import {CheckboxHarnessFilters, MatCheckboxHarness} from '@angular/material/checkbox/testing'
import { isNumber } from 'util';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent  {
 
  frmStepOne: FormGroup;
  isSelected:boolean;
  isAll:boolean;
  checkArray: FormArray;
  x:number=1;
  data: typesOfShoes[];
  flag:boolean=true;
  indeterminate = false;
  checked = false;
  name: string;
  filteredShoes:typesOfShoes[];

  @ViewChild(MatListOption) private allSelected:MatListOption

  constructor(private _formBuilder: FormBuilder,@Inject(DataService) private dataService: DataService) { 
     this.data = dataService.getData();
     this.filteredShoes=dataService.getData();
     this.frmStepOne = this._formBuilder.group({
      searchbar:[''],
      selectedshoes:[''],
      selectAll:[''],
    });
  }
  ngOnInit() {
    this.frmStepOne.controls.searchbar.valueChanges.subscribe(searchSrting => {
      this.filteredShoes = this.getSearchResult(searchSrting).slice();
      });
  };

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.frmStepOne.controls.selectedshoes
      .patchValue([...this.data.map(item => item.id), 0]);
    } else {
      this.frmStepOne.controls.selectedshoes.patchValue([]);
    }
  }
  togglePerOne(){ 
    if (this.allSelected.selected) {  
     this.allSelected.toggle();
     return false;
 }
   if(this.frmStepOne.controls.selectedshoes.value.length==this.data.length)
     this.allSelected.toggle();
 }
  onSubmit() {
    if(this.frmStepOne.valid){
      if(this.frmStepOne.controls.selectedshoes.value)
      {
        let k:any
        k=this.frmStepOne.controls.selectedshoes.value.filter(x=>!isNumber(x)).join(',')
       console.log(k);
      }
      console.log(this.frmStepOne.value);
    }
  }
  getSearchResult(searchString: string): any {
    return this.data.filter(x => x.name.toLowerCase().includes(searchString.toLowerCase()))
 }
}