export class Calculator {
    num1 : number
    num2 : number

    constructor(num1, num2) {
    this.num1 = num1
    this.num2 = num2
    }

    addition(){
        return this.num1 + this.num2;
    }

    isGreater():boolean{
    return this.num1 > this.num2;
    }
}