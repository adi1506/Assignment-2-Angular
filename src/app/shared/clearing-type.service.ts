import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ClearingTypeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    clearingType: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern('[a-zA-Z]*')]),
    description: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    countryCode: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
    countryName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    dayFlag: new FormControl(0),
    byPassIGPCheck: new FormControl(false),
    workFlowFlag: new FormControl(false),
    houseCheckFlag: new FormControl(false),
    remainderDays: new FormControl('',[Validators.required,Validators.min(30)]),
    expectedClearingDays: new FormControl('',[Validators.minLength(2),Validators.maxLength(3),Validators.pattern('[0-9]+')]),
    transactionCode: new FormControl(''),
    commitalRealisationFlag: new FormControl(false),
    commitalRealisationDays: new FormControl(''),
    commitalRealisationStage: new FormControl(0),
    autoFinalityFlag: new FormControl(false),
    autoFinalityDays: new FormControl(''),
    autoFinalityStage: new FormControl(0),
    autoLiquidationFlag: new FormControl(false),
    autoLiquidationDays: new FormControl(''),
    autoLiquidationStage: new FormControl(0),
    duplicateCheck: new FormControl(false),
    fieldForDuplicateCheck: new FormControl(''),
    clearingTypeForDuplicateCheck: new FormControl(''),
    remarks: new FormControl(''),
    binLength: new FormControl(''),
    datePicker: new FormControl('',Validators.required),
    
  })
}
