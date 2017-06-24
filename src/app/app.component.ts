import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public allUsers: Array<User>;
  public users: Array<User>;
  public showTable: boolean = true;
  public columnsName: Array<string>;
  public searchPlaceholder: string;
  
  ngOnInit() {
    this.columnsName = new Array<string>();
    this.columnsName.push("Name");
    this.columnsName.push("Email");
    
    this.allUsers = new Array<User>();
    this.allUsers.push(new User('Ricardo Mendes', 'ricardo_mendes@hotmail.com'));
    this.allUsers.push(new User('Ricardo Junior', 'ricardo_junior@gmail.com'));
    this.allUsers.push(new User('Mendes Silva', 'mendes_silva@hotmail.com'));
    this.users = this.allUsers;

    this.searchPlaceholder = "Search by name or email";
  }

  public updateItems(items: Array<any>){
    if(items != undefined){
      this.showTable = items.length > 0 ? true : false;
      this.users = items;
    }
  }

}
