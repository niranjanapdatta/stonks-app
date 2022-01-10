import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user: any = {};

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user.username = this.userService.getUserData().username;
    this.user.is_admin = false;
  }

  submitAction(): void {
    if(this.user.retypePassword && this.user.password && this.user.retypePassword == this.user.password)
      this.userService.changePassword(this.user).subscribe(res => {
        switch(res) {
          case "username": alert("User by that username does not exist!");
                        break;
          case "incorrect": alert("Incorrect current password!");
                        break;
          case "success": alert("Password has been changed successfully. Please relogin.");
                        this.router.navigate(['/login']);
                        break;
          default: alert("Oops! There was a problem while changing your password. Please try again later.");
                        break;
        }
      });
    else alert("Retyped New Password does not match New Password");
  }


}
