import { Component, OnInit, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() rowData: User;

  constructor() { }

  ngOnInit() {
  }

}
