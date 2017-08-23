import { BankAccount } from './account';

fdescribe('ex.04 - Account', () => {

  // TODO: implement empty tests and make all tests pass

  it('should create an account with empty balance', () => {
    const account = new BankAccount();
    expect(account.balance).toBe(0);
  });

  it('should allow creating an account with initial balance of 100', () => {
    const account = new BankAccount(100);
    expect(account.balance).toBe(100);
  });

  it('should allow withdrawing money', () => {
    const account = new BankAccount(100);
    account.withdraw(1);
    expect(account.balance).toBe(99);
  });

  it('should report an error if there is not enough money', () => {
    const account = new BankAccount(100);
    expect(() => {
      account.withdraw(1000);
    }).toThrowError('Not enough money');
  });
});
