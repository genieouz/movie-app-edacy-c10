import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  { path: "", component: TasksComponent, canActivate: [AuthGuard] },
  { path: "create", component: TasksFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
