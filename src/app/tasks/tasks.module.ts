import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
import { FilterByFieldPipe } from '../shared/pipes/filter-by-field/filter-by-field.pipe';
import { FilterByFieldModule } from '../shared/pipes/filter-by-field/filter-by-field.module';
import { TasksFormComponent } from './tasks-form/tasks-form.component';


@NgModule({
  declarations: [
    TasksComponent,
    TasksFormComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    FilterByFieldModule
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
