import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  obtenerGastos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gastos`);
  }
 
}
