import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSaveDialogComponent } from '../mat-save-dialog/mat-save-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openSaveDialog(){
    this.dialog.open(MatSaveDialogComponent,{
      width:'390px',
      position: {top : "10px"}, 
      panelClass: 'confirm-dialog-container',
      disableClose: false
    })
  }
}
