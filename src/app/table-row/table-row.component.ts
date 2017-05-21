import { Component, OnInit, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() item: any;
  public itemProperties: any[];

  constructor() { }

  ngOnInit() {
    this.itemProperties = Object.getOwnPropertyNames(this.item); 
  }

}
