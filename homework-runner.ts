import {Calculator} from "./Calculator";
import {Product} from "./Product";
import {Account} from "./Account";

const numbersToAdd = new Calculator (5, 10)
const comparedNumbers = numbersToAdd.isGreater()
const Iphone6 = new Product('Iphone 6', 500, 1000)
const Iphone7 = new Product('Iphone 7', 750, 2000)
const Iphone8 = new Product('Iphone 8', 1200, 5000)
const Iphone6TotalValue = Iphone6.getTotalValue()
const Iphone7TotalValue = Iphone7.getTotalValue()
const Iphone8TotalValue = Iphone8.getTotalValue()
const totalValue = Iphone6TotalValue + Iphone7TotalValue + Iphone8TotalValue
const AndreiKuzmin = new Account('1234', 1000)

//1
console.log(numbersToAdd.addition())
console.log ('Number 1 is greater than Number 2? : ' + comparedNumbers)

//2
console.log(Iphone6.getTotalValue())
console.log(Iphone7.getTotalValue())
console.log(Iphone8.getTotalValue())

//InStock
console.log('In Stock ? : ' +  Iphone6.isInStock())
console.log('In Stock ? : ' +  Iphone7.isInStock())
console.log('In Stock ? : ' +  Iphone8.isInStock())
console.log (totalValue)

//3
//+
AndreiKuzmin.deposit(1000)
AndreiKuzmin.deposit(1000)
AndreiKuzmin.deposit(1000)
console.log(AndreiKuzmin.getBalance())
//-
AndreiKuzmin.withdraw(1)
AndreiKuzmin.withdraw(1)
AndreiKuzmin.withdraw(1)
AndreiKuzmin.withdraw(1)
console.log(AndreiKuzmin.getBalance())