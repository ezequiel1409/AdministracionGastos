import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gastos-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gastos-home.component.html',
  styleUrl: './gastos-home.component.scss',
  providers: [HttpClient]
})
export class GastosHomeComponent implements OnInit {
  gastos: any[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(): void {
    this.backendService.obtenerGastos()
      .subscribe(
        (data) => {
          this.gastos = data;
        },
        (error) => {
          console.error('Error al obtener los gastos', error);
        }
      );
  }
}
