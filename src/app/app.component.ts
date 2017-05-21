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
  
  ngOnInit() {
    this.aalUsers = new Array<User>();
    this.aalUsers.push(new User('a', 'a'));
    this.aalUsers.push(new User('1', '1'))
    this.aalUsers.push(new User('Ricardo Mendes', 'rmendes@hotmail.com'));
    this.aalUsers.push(new User('Ricardo Silva', 'rsilva@hotmail.com'));
    this.aalUsers.push(new User('Kamila Alvarez', 'kamila05@hotmail.com'));
    this.users = this.aalUsers;
  }

  public updateItems(items: Array<any>){
    if(items != undefined){
      this.showTable = items.length > 0 ? true : false;
      console.log("Em app componente === ", items);
      this.users = items;
    }
  }

}
