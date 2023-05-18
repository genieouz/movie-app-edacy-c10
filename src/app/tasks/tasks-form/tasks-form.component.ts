import { Component } from '@angular/core';

@Component({
  selector: "app-tasks-form",
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent {
  task = { title: "", status: "A faire" };

  addTask() {
    const result = localStorage.getItem("tasks");
    const tasks = result ? JSON.parse(result) : [];
    tasks.push(this.task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("ajouté avec succés")
  }
}
