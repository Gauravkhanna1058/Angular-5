import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Userlist } from '../userlist';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
 
  users : any = {};
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.userService.getuserlist().subscribe(users => this.users = users);
  }

}
