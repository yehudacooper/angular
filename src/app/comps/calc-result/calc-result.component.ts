import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.css']
})
export class CalcResultComponent implements OnInit {

  str:string;
  result:string;

  constructor(private myservice:ResultsService) { }

  @ViewChild('numInput') myInput:ElementRef;

  ngOnInit(): void {
  }
  operatorKey(operand:string){
    //  this.myInput.nativeElement.value += operand;
     this.str += operand;
    
  }
  onResultKey(){
    this.result = this.str +" = "+ eval(this.str);
    this.myservice.resultsArr.push(this.result);
    this.str = "";
    console.log(this.myservice.resultsArr);
    

  }
  createNewUl(){
    this.myservice.matrixResultsArr.push(this.myservice.resultsArr);
    this.myservice.resultsArr = [];
    console.log(this.myservice.matrixResultsArr);
  }

}
