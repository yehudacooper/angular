import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  resultsArr:string[] = [];
  matrixResultsArr:string[][] = [];
  showhistory:boolean = false;
  constructor() { }
}
