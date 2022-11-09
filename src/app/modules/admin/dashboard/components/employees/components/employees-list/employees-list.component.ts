import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/core/auth/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent {
  @Input() employees: Employee[] = [];
  @Output() readonly modifyEvent = new EventEmitter<Employee>();
  @Output() readonly deleteEvent = new EventEmitter<Employee>();
}
