import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    AddStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
