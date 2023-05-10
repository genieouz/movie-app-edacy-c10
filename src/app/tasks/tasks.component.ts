import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  constructor() {}
  task = { title: "", status: "A faire" }
  tasks = [
    { title: "Task 1", status: "En cours" },
    { title: "Task 2", status: "A faire" },
    { title: "Task 3", status: "En cours" },
    { title: "Task 4", status: "Terminer" }
  ];
  search: string = "";
  searchField: string = "title"

  addTask() {
    this.tasks = [...this.tasks, { ...this.task }]
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasks = [...this.tasks]
  }
}
