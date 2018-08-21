import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Icourses } from './courses';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {



  constructor(private frmBuilder: FormBuilder) { 
    
  }
addCourseForm = this.frmBuilder.group({
  cname : ['',[
    Validators.required,
    Validators.pattern('[A-Za-z0-9]+')
  ]],
  cdur:['',[
    Validators.required,
    Validators.pattern('^[0-9](\.[0-9]+)?$'),
  ]],
});

addCourse(){
  this.course.push({courseName:this.addCourseForm.value.cname,courseDur:this.addCourseForm.value.cdur})
}
duration:string;
searchstr:string;
getDur(){

for(let c of this.course ){
  if(c.courseName==this.searchstr){
    this.duration=c.courseDur;
    
  }
  document.getElementById('showDur').innerHTML=this.duration;
}

}
 
  ngOnInit() {
    
  }
  course: Icourses[] = [
    {
      
      "courseName": "Java",
      "courseDur": "4 months"
    },
    {
      
      "courseName": "JavaScript",
      "courseDur": "3 months"
    },
    {
      
      "courseName": "PHP",
      "courseDur": "2 months"
    },
    {
      
      "courseName": "Python",
      "courseDur": "2 months"
    },
    {
      
      "courseName": "Android",
      "courseDur": "3 months"
    }
  ];

}

