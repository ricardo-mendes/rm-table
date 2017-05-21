import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public items: Array<any>;
  public showTable: boolean;
  
  ngOnInit() {
  }

  public updateItems(data: Array<any>){
    if(data != undefined){
      this.showTable = data.length > 0 ? true : false;
      console.log("Em app componente === ", data);
      this.items = data;
    }
  }

}
