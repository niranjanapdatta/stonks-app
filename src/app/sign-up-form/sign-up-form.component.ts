import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  user: any = {};

  reTypePassword: String = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    const newUser: User = {
      username: this.user.username,
      password: this.user.password,
      is_admin: false
    }
    if(this.user.retypePassword && this.user.password && this.user.retypePassword == this.user.password)
      this.userService.registerUser(newUser).subscribe(res => {
        switch(res) {
          case "exists": alert("User by that username already exists!");
                        break;
          case "success": alert("Sign Up Success. Please login to your account.");
                        this.router.navigate(['/login']);
                        break;
          default: alert("Oops! There was a problem while signing up. Please try again later.");
                        break;
        }
      });
    else alert("Retyped Password does not match Password");
  }

}
