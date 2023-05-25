import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any = [];
  BASE_URL="http://localhost:3001";
  constructor(private tasksService: TasksService) {

  }
  ngOnInit(): void {
    this.getTasks();
    // const result = localStorage.getItem("tasks");
    // if(result) {
    //   this.tasks = JSON.parse(result);
    // }
  }
  search: string = "";
  searchField: string = "title"

  removeTask(id: string) {
    // this.tasks.splice(index, 1);
    // this.tasks = [...this.tasks];
    // localStorage.setItem("tasks", JSON.stringify(this.tasks))
    this.tasksService.removeTask(id).subscribe(
      (result: any) => {
        if(result.deletedCount === 1) {
          this.getTasks();
        }
      }
    )
  }

  getTasks() {
    this.tasksService.getTasks().subscribe(
      (result: any) => {
        this.tasks = result;
      }
    )
  }
}
