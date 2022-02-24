import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
