import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerUser() {
    // let users: any = localStorage.getItem("users");
    // if(users) {
    //   users = JSON.parse(users);
    //   users.push(this.newUser);
    // } else {
    //   users = [this.newUser];
    // }
    // localStorage.setItem("users", JSON.stringify(users));
    this.authService.register(this.newUser).subscribe(
      result => {
        localStorage.setItem("currentSession", JSON.stringify(result));
        this.router.navigate(['/tasks'])
      }
    )
  }
}
