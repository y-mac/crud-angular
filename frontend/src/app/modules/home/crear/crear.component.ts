import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EmployeeService } from "../../../services/employee.service";
import { Employee } from "../../../models/employee";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService) { 
    this.employeeForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
      age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(10), Validators.max(90)]),
      gender: new FormControl('M'),
    });
    
  }

  get name() {
    console.log(this.employeeForm.get('name'))
    return this.employeeForm.get('name');
  }
  
  get age() {
    return this.employeeForm.get('age');
  }

  get gender() {
    return this.employeeForm.get('gender');
  }

  
  onSubmit() {
    const employee = new Employee('', this.employeeForm.value.name, this.employeeForm.value.age, this.employeeForm.value.gender, '000');
    this.employeeService.postEmployee(employee).subscribe((response) => {
        console.log(response);
      }
    );
  }

}