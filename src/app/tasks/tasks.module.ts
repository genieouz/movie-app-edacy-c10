import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
import { FilterByFieldPipe } from '../shared/pipes/filter-by-field/filter-by-field.pipe';
import { FilterByFieldModule } from '../shared/pipes/filter-by-field/filter-by-field.module';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './tasks.service';


@NgModule({
  declarations: [
    TasksComponent,
    TasksFormComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    FilterByFieldModule,
    HttpClientModule
  ],
  providers: [TasksService],
  exports: [TasksComponent]
})
export class TasksModule { }
