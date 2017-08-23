export class BankAccount {

  constructor(private _balance = 0) {}

  withdraw(amount: number) {
    if (this._balance > amount) {
      this._balance -= amount;
    }
  }

  get balance() {
    return this._balance;
  }
}
