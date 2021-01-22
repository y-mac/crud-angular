import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Employee } from "../models/employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API = "http://localhost:4000/api/employees";

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }
  
  loginEmployee(employee: Employee) {
    return this.http.post(`${this.URL_API}/login`, employee);
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  getEmployees() {
    console.log("cargar usuarios",this.http.get<Employee[]>(this.URL_API));
    return this.http.get<Employee[]>(this.URL_API);
  }

  getEmployee(employee: Employee) {
    return this.http.post(this.URL_API + `/${employee._id}`, employee);
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  } 
}