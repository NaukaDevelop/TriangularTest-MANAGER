import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudAService {

  ink: string [] = [];

  constructor() { 
    this.ink[0] = "rojo";
    this.ink[1] = "azul";
    this.ink[2] = "verde";
    this.ink[3] = "negro";
  }

  getAllRecords(){
    return this.ink;
  }

  createRecord(color: string){
    this.ink.push(color);
    return this.ink;
  }
}
