import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../../services/backend.service';
import { ModalFormGastoComponent } from '../../modal/modal-form-gasto/modal-form-gasto.component';
import { FormEditarGastoComponent } from '../modal/form-editar-gasto/form-editar-gasto.component';
import { FormEliminarGastoComponent } from '../modal/form-eliminar-gasto/form-eliminar-gasto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IGasto } from '../../interface/IGasto';

@Component({
  selector: 'app-gastos-home',
  standalone: true,
  imports: [CommonModule, ModalFormGastoComponent, ReactiveFormsModule],
  templateUrl: './gastos-home.component.html',
  styleUrl: './gastos-home.component.scss',
  providers: [HttpClient]
})
export class GastosHomeComponent implements OnInit {
  gastos: any[] = [];
  idGastos: any;
  totalGastos: any;
  constructor(private backendService: BackendService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(): void {
    this.backendService.obtenerGastos()
      .subscribe({
        next: data => {
          this.gastos = data;
          this.sumarGastos();
        },
        error: error => {
          console.error('Error al obtener los gastos', error);
        }
      });
  }
  sumarGastos(): void {
    this.backendService.obtenerSumaDeLosGastos()
      .subscribe({
        next: data => {
          this.totalGastos = data;
          console.log("Suma total de los gastos:", this.totalGastos);

        },
        error: error => {
          console.error('Error al obtener los gastos', error);
        }
      });
   
  }
  onClickEditGasto(_gasto: IGasto): void {
    const dialogRef = this.dialog.open(FormEditarGastoComponent, {
      width: '600px',
      data: { _gasto:  _gasto } // Pasa el gastoID al modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Manejar la lógica después de cerrar el modal si es necesario
      if (result) {
        // Actualizar la lista de gastos si se ha editado correctamente
        this.obtenerGastos();
      }
    });
  }
  onClickEliminarGasto(gastoID:any): void{
    const dialogRef = this.dialog.open(FormEliminarGastoComponent, {
      width: '600px' // Adjust modal width as needed
    });
  }
  openExpenseModal() {
    const dialogRef = this.dialog.open(ModalFormGastoComponent, {
      width: '600px' // Adjust modal width as needed
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Refresh expense list or update UI based on saved expense
        console.log('Expense saved successfully!');
      }
      console.log("gasto no guardado")
    });
    }
   
}
