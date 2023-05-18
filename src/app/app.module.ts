import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { TitleComponent } from './title/title.component';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';
import { TasksModule } from './tasks/tasks.module';
import { FilterByFieldModule } from './shared/pipes/filter-by-field/filter-by-field.module';
import { FilterModule } from './shared/pipes/filter/filter.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterByFieldModule,
    FilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
