export class Account {
    accountNumber : string
    balance : number

    constructor (accountNumber, balance) {
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit (amount : number) : void {
        this.balance = this.balance + amount
}

    withdraw (amount : number) : void {
        this.balance = this.balance - amount
    }

    getBalance () {
        return this.balance
    }
}