import { Component, Input } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() items: any[];
  @Input() columnsName: string[];

}
