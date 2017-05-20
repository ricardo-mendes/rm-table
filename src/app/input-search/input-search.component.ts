import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() searchUpdated = new EventEmitter();
  public aalUsers: Array<User>;
  public users: Array<User>;
  public searchData: string;

  ngOnInit() {
    console.log("input Component");
    this.aalUsers = new Array<User>();
    this.aalUsers.push(new User('a', 'a'));
    this.aalUsers.push(new User('1', '1'))
    this.aalUsers.push(new User('Ricardo Mendes', 'rmendes@hotmail.com'));
    this.aalUsers.push(new User('Ricardo Silva', 'rsilva@hotmail.com'));
    this.aalUsers.push(new User('Kamila Alvarez', 'kamila05@hotmail.com'));
    this.users = this.aalUsers;
    this.searchUpdated.emit(this.users);
  }

  public updateUsers(val: string): void{
    console.log(val);
    this.searchData = val;
    this.users = this.aalUsers;
    if(this.searchData != ""){
      this.users = this.aalUsers.filter(u => u.name.toLocaleLowerCase().search(this.searchData.toLocaleLowerCase()) > -1 
      || u.email.toLocaleLowerCase().search(this.searchData.toLocaleLowerCase()) > - 1);
    }
    this.searchUpdated.emit(this.users);
  }
}
