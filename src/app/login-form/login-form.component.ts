import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    this.userService.authenticateUser(this.user).subscribe(res => {
      switch(res) {
        case "username": alert("User by that username does not exist!");
                      break;
        case "incorrect": alert("Incorrect password!");
                      break;
        case "user": this.userService.setIsAdmin(false);
                      break;
        case "admin": this.userService.setIsAdmin(true);
                      break;
        default: alert("Oops! There was a problem while logging in. Please try again later.");
                      break;
      }
      this.user = {}; // Clear the form
    });
  }

}
