import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: Observable<any>;
  constructor(
    private userService: UserService,
  ) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.users = this.userService.getUsers();
  }
  initializeItems(): void {
  }
  getItems(searchbar) {
  
  }
}
