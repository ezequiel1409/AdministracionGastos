import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGasto } from '../interface/IGasto';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  obtenerGastos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gastos`);
  }
  obtenerCategoriaPorID(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/categoria`);
  }
  obtenerUsuarioPorNombre(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario`);
  }
  obtenerIngreso(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/ingresos`);
  }
  agregarGasto(gasto: IGasto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.baseUrl}/gasto`, gasto ,httpOptions);
  }
}
