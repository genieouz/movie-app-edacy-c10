import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { TitleComponent } from './title/title.component';
import { TasksComponent } from './tasks/tasks.component';
import { FilterPipe } from './filter.pipe';
import { FilterByFieldPipe } from './filter-by-field.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TitleComponent,
    TasksComponent,
    FilterPipe,
    FilterByFieldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
