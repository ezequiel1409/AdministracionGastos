// import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { ModalFormBodyCComponent } from '../modal-form-body-c/modal-form-body-c.component';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { BackendService } from '../../services/backend.service';
// import { HttpClientModule } from '@angular/common/http';
// import { Expense } from '../../interface/Expense';


// @Component({
//   selector: 'app-modal-form-gasto',
//   standalone: true,
//   imports: [ModalFormBodyCComponent, ReactiveFormsModule, HttpClientModule ],
//   templateUrl: './modal-form-gasto.component.html',
//   styleUrl: './modal-form-gasto.component.scss'
// })
// export class ModalFormGastoComponent  {
//   expenseForm!: FormGroup;
//   fb: any;
  
//   constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<ModalFormGastoComponent>, private backendService: BackendService,) {
//     this.expenseForm = this.fb.group({
//       amount: [null, Validators.required],
//       date: [null, Validators.required],
//       description: [null, Validators.required],
//       categoryID: [null, Validators.required]
//     });
//    }
 
//   cancel() {
//     this.dialogRef.close(); // Close the modal without saving
//   }
//   saveExpense(_expense: Expense) {
//     this.backendService.agregarGasto(this.expenseForm.value) // Send the form data
//       .subscribe({
//         next(value) {
//           console.log("Expense saved successfully:", value); // Log the response (optional)
//         },
//         error(err) {
//           console.error("Error saving expense:", err); // Log the error
//           // Handle error (e.g., show error message)
//         }
//       });
//   }
//   save() {
//     if (this.expenseForm) {
//       const expenseData: Expense = {
//         amount: this.expenseForm.get('amount')?.value,
//         date: this.expenseForm.get('date')?.value,
//         description: this.expenseForm.get('description')?.value,
//         categoryID: this.expenseForm.get('categoryID')?.value
//       };
//       this.saveExpense(expenseData);
//       console.log(this.expenseForm.value);
//     } else {
//       // Maneja el caso en el que expenseForm es null o undefined
//       console.error("ExpenseForm es null o undefined");
//     }
//   }
// }
