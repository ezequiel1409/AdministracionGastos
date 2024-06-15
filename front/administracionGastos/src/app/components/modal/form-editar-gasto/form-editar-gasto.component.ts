import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IGasto } from '../../../interface/IGasto';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-form-editar-gasto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-editar-gasto.component.html',
  styleUrl: './form-editar-gasto.component.scss'
})
export class FormEditarGastoComponent {
  expenseForm: FormGroup = this.fb.group({
    Monto: [this.gasto.Monto, Validators.required],
    UsuarioID: [this.gasto.usuarioID, Validators.required],
    Descripcion: [this.gasto.Descripcion, Validators.required],
    CategoriaID: [this.gasto.categoriaID, Validators.required],
    FormaDePago: [this.gasto.FormaDePago, Validators.required],
    Moneda: [this.gasto.moneda, Validators.required] // Add if using this form control
  });

  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<FormEditarGastoComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public gasto: IGasto,
    private backendService: BackendService,
  ) { }

  
  onClickCancel() {
    this.dialogRef.close(); // Close the modal without saving
  }
  onClickSave() {
    if (this.gasto) {
      this.saveExpense(this.gasto);
    } else {
      console.error("ExpenseForm es null o undefined");
    }
  }
  saveExpense(_expense: IGasto) {
    this.backendService.agregarGasto(_expense) // Send the form data
      .subscribe({
        next(value: any) {
          console.log("Expense saved successfully:", value); // Log the response (optional)
        },
        error(err: any) {
          console.error("Error saving expense:", err); // Log the error
          // Handle error (e.g., show error message)
        }
      });
  }
}
