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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterceptor } from './error.interceptor';

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
    FilterModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
