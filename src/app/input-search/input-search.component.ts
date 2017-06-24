import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() searchUpdated = new EventEmitter();
  @Input() allItems: Array<any>;
  @Input() searchPlaceholder: string;
  public items: Array<any>;
  public searchData: string;
  public itemProperties:  Array<any>;

  ngOnInit() {
      this.itemProperties = Object.getOwnPropertyNames(this.allItems[0]); 
  }

  public updateItems(val: string): void{
    this.searchData = val;
    this.items = this.allItems;
    this.items = this.filterSearchDataInAllItems(this.searchData);
    this.searchUpdated.emit(this.items);
  }

  private filterSearchDataInAllItems(val: string){
    let properties = this.itemProperties;
    return this.allItems.filter(function(item) {
      for(var i = 0; i < properties.length; i++)
      {
          if(item[properties[i]].toLocaleLowerCase().search(val.toLocaleLowerCase()) > -1){
            return true;
          }
      }
    });
  }
}

