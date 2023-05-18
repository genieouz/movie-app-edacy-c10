import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any = [];
  constructor() {

  }
  ngOnInit(): void {
    const result = localStorage.getItem("tasks");
    if(result) {
      this.tasks = JSON.parse(result);
    }
  }
  search: string = "";
  searchField: string = "title"

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasks = [...this.tasks];
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
}
