import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/auth/models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/employees`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.put<Employee>(
      `${this.url}/employees/${employee?.id}`,
      employee
    );
  }

  deleteEmployee(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.url}/employees/${id}`);
  }
}
