import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  user: User = {};

  reTypePassword: String = "";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user.is_admin = false;
  }

  submitAction(): void {
    this.userService.registerUser(this.user).subscribe(res => {
      switch(res) {
        case "exists": alert("User by that username already exists!");
                      break;
        case "success": alert("Sign Up Success");
                      break;
        default: alert("Oops! There was a problem while signing up. Please try again later.");
                      break;
      }
      this.user = {}; // Clear the form
      this.user.is_admin = false;
    });
  }

}
