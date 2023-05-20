import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    let users: any = localStorage.getItem("users");
    if(users) {
      users = JSON.parse(users);
      users.push(this.newUser);
    } else {
      users = [this.newUser];
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
}
