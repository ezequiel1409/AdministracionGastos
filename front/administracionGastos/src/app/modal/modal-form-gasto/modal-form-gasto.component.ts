import { Component,  Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { IGasto } from '../../interface/IGasto';

@Component({
  selector: 'app-modal-form-gasto',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './modal-form-gasto.component.html',
  styleUrl: './modal-form-gasto.component.scss'
})
export class ModalFormGastoComponent {

  expenseForm: FormGroup = this.fb.group({
    Monto: new FormControl(0, [Validators.required]),
      UsuarioID: new FormControl('', [Validators.required]),
      Descripcion: new FormControl('', [Validators.required]),
      CategoriaID: new FormControl('', [Validators.required]),
      FormaDePago: new FormControl('', [Validators.required]),
      Moneda: new FormControl('', [Validators.required]),
      Beneficiario: new FormControl('', [Validators.required]),
  }); 

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<ModalFormGastoComponent>, private backendService: BackendService, private  fb:  FormBuilder) { }
  
  onClickCancel() {
    this.dialogRef.close(); // Close the modal without saving
  }
  onClickSave() {
    if (this.expenseForm) {
      const expenseData: IGasto = {
        
        Monto: this.expenseForm.get('Monto')?.value,
        Descripcion: this.expenseForm.get('Descripcion')?.value,
        categoriaID: this.expenseForm.get('CategoriaID')?.value,
        FormaDePago: this.expenseForm.get('FormaDePago')?.value,
        usuarioID: 1,
        beneficiario:  1,
        moneda: this.expenseForm.get('Moneda')?.value,
      };
      console.log(expenseData.categoriaID);
      
      this.saveExpense(expenseData);
    } else {
      console.error("ExpenseForm es null o undefined");
    }
  }
  saveExpense(_expense: IGasto) {
    this.backendService.agregarGasto(_expense) // Send the form data
      .subscribe({
        next(value) {
          console.log("Expense saved successfully:", value); // Log the response (optional)
        },
        error(err) {
          console.error("Error saving expense:", err); // Log the error
          // Handle error (e.g., show error message)
        }
      });
  }
}