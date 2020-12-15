import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import {OnInit } from '@angular/core';
import { Employee } from './common/employee';
import { data } from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeemanagement';
  employees: Employee[];
  workdays:string;
  constructor(private employeeService: EmployeeService){ }
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(
      data=>this.employees = data
    )
   
  }

  updateWorkdays(id:number, days: number) {
    if(days>0 && days <=260){
      this.employeeService.updateWorkDays(id, days).subscribe(
        data=>{
          this.employees.filter(e=>e.id===id).forEach(e=>{
            e.workdays=days;
            e.vacationDays=data}); 
            days=0;
        }
      )
    }
    else{
      window.alert("Please enter a number between 0(exclude) and 260");
    }
  }
  takeVacation(id:number, days:number,leftdays:number){
    if(days<=leftdays && days>0){
      this.employeeService.takeVacation(id,days).subscribe(
        data=>{
          this.employees.filter(e=>e.id===id).forEach(e=>{
            e.vacationDays=data}); 
        }
      )
    }
    else{
      if(days<=0)
        window.alert("You cannot enter a negetive number");
      else
        window.alert("The vacation days you applied are bigger than your accumulated days, your available vacation days are "+leftdays);
    }

  }
}
