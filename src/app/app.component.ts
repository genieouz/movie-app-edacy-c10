import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from './movie/types/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'MY APP';
  fullName = "John Bishop";
  search = "";
  movies: IMovie[] = [
    {
      title: "vikings",
      cover: "./assets/img/vikings.jpeg",
      description: "Description du movie vikings",
      year: 2010
    },
    {
      title: "Game of thrones",
      cover: "./assets/img/got.jpg",
      description: "Description du movie game",
      year: 2014
    },
    {
      title: "The Flash",
      cover: "./assets/img/flash.jpeg",
      description: "Description du movie flash",
      year: 2018
    }
  ]

  filter() {
    return this.movies.filter(movie => movie.title.includes(this.search));
  }


  logout() {
    localStorage.removeItem("currentSession")
    this.router.navigate(['/auth/login'])
  }

  userIsLoggedIn() {
    return localStorage.getItem("currentSession")
  }
}
