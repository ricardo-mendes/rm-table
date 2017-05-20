import { Component, OnInit, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: User[];
  public columnsName: string[];
 

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.columnsName = new Array<string>();
    this.columnsName.push("Name");
    this.columnsName.push("Email");
  }

}