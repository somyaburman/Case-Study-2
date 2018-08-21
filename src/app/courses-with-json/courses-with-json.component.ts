import { Component, OnInit } from '@angular/core';
import { HttpClientModule,  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-courses-with-json',
  templateUrl: './courses-with-json.component.html',
  styleUrls: ['./courses-with-json.component.css']
})
export class CoursesWithJsonComponent implements OnInit {

  constructor(private http:HttpClient) { }

  arrCourse : string[];

  ngOnInit() {
    this.http.get('./assets/courses.json').subscribe(data => {
      this.arrCourse = data as string[];
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      })
  }

}
