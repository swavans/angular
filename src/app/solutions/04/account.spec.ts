import {BankAccount} from './account';

describe('sol.04 - Account', () => {

  // TODO: implement empty tests and make all tests pass

  it('should create an account with empty balance', () => {
    const account = new BankAccount();
    expect(account.balance).toBe(0);
  });

  it('should allow creating an account with initial balance of 100', () => {

    // ex-start
    const account = new BankAccount(100);
    expect(account.balance).toBe(100);
    // ex-end
  });

  it('should allow withdrawing money', () => {

    // ex-start
    const account = new BankAccount(100);

    account.withdraw(10);
    expect(account.balance).toBe(90);

    account.withdraw(20);
    expect(account.balance).toBe(70);
    // ex-end
  });

  it('should report an error if there is not enough money', () => {
    const account = new BankAccount(100);
    expect(() => {
      account.withdraw(1000);
    }).toThrowError('Not enough money');
  });
});
