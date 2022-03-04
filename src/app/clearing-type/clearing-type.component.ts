import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClearingTypeService } from '../shared/clearing-type.service';
import { DataService } from '../shared/data.service';
import { DialogService } from '../shared/dialog.service';




@Component({
  selector: 'app-clearing-type',
  templateUrl: './clearing-type.component.html',
  styleUrls: ['./clearing-type.component.css']
})
export class ClearingTypeComponent implements OnInit {

  dayFlagValue: String;
  commitalRealisationStage: String;
  autoFinalityStage: String;
  autoLiquidationStage: String;

  todayDate:Date = new Date();

  users:any;

  constructor(public service: ClearingTypeService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private clearingData:DataService) { 

      clearingData.users().subscribe((data)=>{
        // console.warn("data",data);
        this.users = data;
      })
    
  }

  ngOnInit(): void {
  }

  onSave(){
    this.dialogService.openSaveDialog();
  }

  getClearingTypeData(data: any){
    // console.warn(data);
    this.clearingData.saveData(data).subscribe((res)=>{
        console.warn(res);
    })
  }



}
