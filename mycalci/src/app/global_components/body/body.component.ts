import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  /**
   * Initialization of variables as empty and writing strict mode
   */
  input:string = '';
  result:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
     * pressNum is used to take input from the users only string
     * other than string it doesn't allow to enter in the calci
     * @params num as a String
     * @returns Number 
     * 
     * */  
  pressNum(num: string) {
    
    /**
     * Do Not Allow (.) more than once
     * */
    if (num==".") {
      if (this.input !="" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
 
    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
 
    this.input = this.input + num
    this.calcAnswer();
  }
 
  /**
     * getLastOperand is used to not allow more than one operator
     * @params String
     * @returns boolean
     * 
     * */
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
 

  /**
     * getLastOperand is used to donot allow more than one operator
     * @params op as string
     * @returns boolean
     * 
     * */
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
   
    this.input = this.input + op
    this.calcAnswer();
  }
 
  /**
     * clear is used to delete the last value in the string if it is not null
     * @params string
     * @returns boolean
     * 
     * */
  clear() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }
 
  /**
     * allclear is used to delete the all values in the string if it is not null 
     * @params string
     * @returns boolean
     * 
     * */
  allClear() {
    this.result = '';
    this.input = '';
  }
 
  /**
     * calcAnswer() is used to calculate the mathematical operations 
     * @params String
     * @returns String
     * 
     * */
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
    
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
    
    // if the last value any one of these operator it should be return same value before the operator
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
  }
  
  /**
     * getAnswer() is used to get the answer and it will call the calcAnswer() 
     * method then it perform all above operations, if the input should display the result
     * if the input is 0 then input should display empty or null
     *  
     * @params string
     * @returns boolean
     * 
     * */
  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
 
}
