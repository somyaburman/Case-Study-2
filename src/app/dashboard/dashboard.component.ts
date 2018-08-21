import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dash1 = 'Courses'
  dash2 = 'Courses with JSON'

  constructor() { }

  ngOnInit() {
  }

}
