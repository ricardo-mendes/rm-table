import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: Array<User>;
  public showTable: boolean;
  
  ngOnInit() {
  }

  public updateUsers(users: Array<User>){
    if(users != undefined)
    {
      this.showTable = users.length > 0 ? true : false;
      console.log("Em app componente === ", users);
      this.users = users;
    }
    
  }

}
