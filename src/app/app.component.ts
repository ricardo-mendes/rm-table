import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public aalUsers: Array<User>;
  public users: Array<User>;
  public showTable: boolean = true;
  public columnsName: Array<string>;
  public searchPlaceholder: string;
  
  ngOnInit() {
    this.columnsName = new Array<string>();
    this.columnsName.push("Name");
    this.columnsName.push("Email");
    
    this.aalUsers = new Array<User>();
    this.aalUsers.push(new User('Ricardo Mendes', 'ricardo_mendes@hotmail.com'));
    this.aalUsers.push(new User('Ricardo Junior', 'ricardo_junior@gmail.com'));
    this.aalUsers.push(new User('Mendes Silva', 'mendes_silva@hotmail.com'));
    this.users = this.aalUsers;

    this.searchPlaceholder = "Search by name or email";
  }

  public updateItems(items: Array<any>){
    if(items != undefined){
      this.showTable = items.length > 0 ? true : false;
      console.log("Em app componente === ", items);
      this.users = items;
    }
  }

}
