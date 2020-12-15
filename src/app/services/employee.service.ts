import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private BASE_URL = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) { }
  updateWorkDays(id: number, days:number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/updateworkday?id=${id}&days=${days}`);
  }

  getAllEmployee(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/all`);
  }

  takeVacation(id: number, days:number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/takevacation?id=${id}&days=${days}`)
  }
}
