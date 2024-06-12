import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../services/backend.service';
import { ModalFormGastoComponent } from '../../modal/modal-form-gasto/modal-form-gasto.component';

@Component({
  selector: 'app-gastos-home',
  standalone: true,
  imports: [CommonModule, ModalFormGastoComponent],
  templateUrl: './gastos-home.component.html',
  styleUrl: './gastos-home.component.scss',
  providers: [HttpClient]
})
export class GastosHomeComponent implements OnInit {
  gastos: any[] = [];
  constructor(private backendService: BackendService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(): void {
    this.backendService.obtenerGastos()
      .subscribe({
        next: data => {
          this.gastos = data;
        },
        error: error => {
          console.error('Error al obtener los gastos', error);
        }
      });
  }

  openExpenseModal() {
    const dialogRef = this.dialog.open(ModalFormGastoComponent, {
      width: '400px' // Adjust modal width as needed
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Refresh expense list or update UI based on saved expense
        console.log('Expense saved successfully!');
      }
    });
    }
   
}
