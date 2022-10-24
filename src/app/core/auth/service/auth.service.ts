import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}/customers`, customer);
  }

  authCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}/customers/auth`, customer);
  }

  authEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/employees/auth`, employee);
  }
}
