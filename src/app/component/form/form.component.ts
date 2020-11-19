import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  sidea: number;
  sideb: number;
  result: number;
  showResult: boolean = false;

  handleCalculate() {
    const data = {
      sidea: this.sidea,
      sideb: this.sideb,
      result: this.result,
    } 
    if(this.sidea == null || this.sideb == null) {
      this.showResult = false;   
    } 
    else {
      this.showResult = true;   
      this.result = Math.hypot(this.sidea, this.sideb);
    }
  }

  handleReset() {
      this.sidea = null;
      this.sideb = null;
      this.showResult = false;
  }

  ngOnInit() {
  }

}
