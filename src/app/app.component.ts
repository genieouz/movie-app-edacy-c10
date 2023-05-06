import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MOVIES APP PAGE';
  fullName = "John Bishop";
  search = "";
  movies = [
    {
      title: "Vikings",
      cover: "./assets/img/flash.jpeg",
      description: "Description du movie vikings"
    },
    {
      title: "Game of thrones",
      cover: "./assets/img/flash.jpeg",
      description: "Description du movie game"
    },
    {
      title: "The Flash",
      cover: "./assets/img/flash.jpeg",
      description: "Description du movie flash"
    }
  ]

  filter() {
    return this.movies.filter(movie => movie.title.includes(this.search));
  }
}
