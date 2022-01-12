import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  makeAdminAction(username: String): void {
    this.userService.makeAdmin(username).subscribe();
    this.getUsersData();
  }
  
  removeAdminStatusAction(username: String): void {
    this.userService.removeAdminStatus(username).subscribe();
    this.getUsersData();
  }

  deleteUserAction(username: String): void {
    this.userService.deleteUser(username).subscribe((res) => {
      switch(res) {
        case "success": alert("User account has been deleted successfully!");
                        break;
        default: alert("Oops! There was a problem while deleting the user. Please try again later.");
        break;
      }
    });
    this.getUsersData();
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe((res) => this.users = res);
  }

}
