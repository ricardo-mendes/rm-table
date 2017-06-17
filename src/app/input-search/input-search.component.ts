import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() searchUpdated = new EventEmitter();
  @Input() aalItems: Array<any>;
  @Input() searchPlaceholder: string;
  public items: Array<any>;
  public searchData: string;
  public itemProperties:  Array<any>;

  ngOnInit() {
      this.itemProperties = Object.getOwnPropertyNames(this.aalItems[0]); 
  }

  public updateItems(val: string): void{
    this.searchData = val;
    this.items = this.aalItems;
    if(this.searchData != ""){
      this.items = this.aalItems.filter(item => item[this.itemProperties[0]].toLocaleLowerCase().search(this.searchData.toLocaleLowerCase()) > -1 
        || item[this.itemProperties[1]].toLocaleLowerCase().search(this.searchData.toLocaleLowerCase()) > - 1);
    }
    this.searchUpdated.emit(this.items);
  }
}

