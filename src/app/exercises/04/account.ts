export class BankAccount {

  constructor(private _balance = 0) {}

  withdraw(amount: number) {
    if (this._balance > amount) {
      this._balance -= amount;
    }else{ throw new Error('Not enough money');}
  }

  get balance() {
    return this._balance;
  }
}
