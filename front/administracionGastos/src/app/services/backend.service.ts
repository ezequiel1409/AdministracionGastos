import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IGasto } from '../interface/IGasto';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  obtenerGastos(): Observable<IGasto[]> {
    return this.http.get<IGasto[]>(`${this.baseUrl}/gastos`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerCategoriaPorID(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categoria`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerUsuarioPorNombre(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerIngreso(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ingresos`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarGasto(gasto: IGasto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.baseUrl}/gasto`, gasto, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
