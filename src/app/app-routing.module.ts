import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: "tasks",
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  { path: "movies", component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
