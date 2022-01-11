import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  user: User = {};

  reTypePassword: String = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user.username = this.userService.getUserData().username;
    this.user.is_admin = this.userService.getUserData().is_admin;
  }

  submitAction(): void {
    this.userService.deleteAccount(this.user).subscribe(res => {
      switch(res) {
        case "username": alert("User by that username does not exist!");
                      break;
        // case "admin": alert("Cannot delete admin user!");
        //               break;
        case "incorrect": alert("Incorrect password");
                      break;
        case "success": alert("Account has been deleted successfully");
                      this.router.navigate(['/login']);
                      break;
        default: alert("Oops! There was a problem while changing your password. Please try again later.");
                      break;
      }
    });
  }

}
