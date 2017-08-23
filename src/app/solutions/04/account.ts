export class BankAccount {

  constructor(private _balance = 0) {}

  withdraw(amount: number) {
    if (this._balance > amount) {
      this._balance -= amount;
    }
    // tslint:disable:one-line ex-start
    else {
      throw new Error('Not enough money');
    }
    // ex-end
  }

  get balance() {
    return this._balance;
  }
}
