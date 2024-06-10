import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-gasto',
  standalone: true,
  imports: [],
  templateUrl: './modal-form-gasto.component.html',
  styleUrl: './modal-form-gasto.component.scss'
})
export class ModalFormGastoComponent {
  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<ModalFormGastoComponent>) { }
  cancel() {
    this.dialogRef.close(); // Close the modal without saving
  }
}
