import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: "app-tasks-form",
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent {
  constructor(
    private tasksService: TasksService,
    private router: Router
  ) {}
  task = { title: "", status: "A faire" };

  addTask() {
    // const result = localStorage.getItem("tasks");
    // const tasks = result ? JSON.parse(result) : [];
    // tasks.push(this.task);
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    this.tasksService.addTask(this.task).subscribe(
      result => {
        this.router.navigate(['/tasks'])
      }
    );
  }
}
