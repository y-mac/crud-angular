import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../../services/employee.service";
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [EmployeeService]
})
export class EditarComponent implements OnInit {
  route : ActivatedRoute
  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit() {
    let id = "6009fd54abf4df28acd87653";
    console.log(this.route);
    //this.getEmployee(id);
  }

  /* getEmployee(id: string) {
    console.log('id',id);
    this.employeeService.getEmployee(id).subscribe((res) => {
      console.log('respuesta',res);
    });
  } */

}
