import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://run.mocky.io/v3/a4256b52-05aa-450b-b143-d7bd48993035";
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }

  saveData(data:any){
    return this.http.post(this.url,data);
  }
}

// {
//   "username" : "GC73034",
//   "date" : "01-03-2022",
//   "dayFlag" : ["T1","T2","T3","T4"],
//   "commitalRealisationStage" : ["T1","T2","T3","T4"],
//   "autoFinalityStage" : ["T1","T2","T3","T4"],
//   "autoLiquidationStage" : ["T1","T2","T3","T4"]
// }