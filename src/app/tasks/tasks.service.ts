import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  BASE_URL="http://localhost:3001";
  constructor(private http: HttpClient) { }


  getTasks() {

    return this.http.get(`${this.BASE_URL}/tasks`)
  }

  removeTask(id: string) {
    return this.http.delete(`${this.BASE_URL}/tasks/${id}`)
  }

  addTask(task: any) {
    return this.http.post(`${this.BASE_URL}/tasks`, task)
  }
}
