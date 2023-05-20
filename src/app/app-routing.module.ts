import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TasksFormComponent } from './tasks/tasks-form/tasks-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {
    path: "tasks",
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: "tasks-teste",
  //   component: TasksComponent,
  //   children: [
  //     { path: "create", component: TasksFormComponent }
  //   ]
  // },
  { path: "teste", component: TitleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
