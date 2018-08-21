import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesWithJsonComponent } from './courses-with-json/courses-with-json.component';
import { HttpClientModule,  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule } from '@angular/router';import {ReactiveFormsModule,  Validators} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent,
    CoursesWithJsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
     ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',
      component:DashboardComponent},
      {
        path:'courses',
        component:CoursesComponent
      },
      {
         path:'courseswithjson',
        component:CoursesWithJsonComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
