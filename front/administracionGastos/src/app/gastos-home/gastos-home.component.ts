import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gastos-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gastos-home.component.html',
  styleUrl: './gastos-home.component.scss'
})
export class GastosHomeComponent implements OnInit {
  gastos: any[]; // Definir el tipo adecuado para los datos de gastos

  constructor() {
    this.gastos = [];
   }

  ngOnInit(): void {
    // Simular datos estáticos para los gastos
    this.gastos = [
      { Monto: 50.25, Descripcion: 'Comida', FormaDePago: 'Efectivo', Categoria: 'Alimentación' },
      { Monto: 20.00, Descripcion: 'Transporte', FormaDePago: 'Tarjeta', Categoria: 'Transporte' },
      { Monto: 100.00, Descripcion: 'Ropa', FormaDePago: 'Efectivo', Categoria: 'Compras' }
      // Puedes agregar más elementos según sea necesario
    ];
  }
}
