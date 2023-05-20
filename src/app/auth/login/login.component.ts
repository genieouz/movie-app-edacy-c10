import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    username: "",
    password: ""
  }
  errorMessage: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    let users: any = localStorage.getItem("users");
    if(!users) {
      this.errorMessage = "Vous n'etes pas encore inscrit"
    } else {
      users = JSON.parse(users);
      const found = users.find((item: any) => item.username === this.user.username && item.password === this.user.password);
      if(!found) {
        this.errorMessage = "Mot de passe ou nom d'utilisateur incorrecte";
      } else {
        delete found.password;
        localStorage.setItem("currentSession", JSON.stringify(found));
        this.router.navigate(['/tasks'])
      }
    }
  }
}
