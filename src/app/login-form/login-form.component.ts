import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private userService: UserService,
    private router: Router
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
        case "user":  this.user.is_admin = false;
                      this.userService.setUserData(this.user);
                      this.router.navigate(['/home']);
                      break;
        case "admin": this.user.is_admin = true;
                      this.userService.setUserData(this.user);
                      this.router.navigate(['/home']);
                      break;
        default: alert("Oops! There was a problem while logging in. Please try again later.");
                      break;
      }
      this.user = {}; // Clear the form
    });
  }

}
