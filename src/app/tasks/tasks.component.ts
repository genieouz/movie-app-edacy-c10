import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  task = { title: "", status: "A faire" }
  tasks = [
    { title: "Task 1", status: "En cours" },
    { title: "Task 2", status: "A faire" },
    { title: "Task 3", status: "En cours" },
    { title: "Task 4", status: "Terminer" }
  ]

  addTask() {
    this.tasks.push({ ...this.task })
  }

  removeTask(index: number) {

  }
}
