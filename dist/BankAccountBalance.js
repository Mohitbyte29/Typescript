"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    _balance = 0;
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Balance is unsufficient");
        }
        this._balance = newBalance;
    }
    get balance() {
        return this._balance;
    }
}
const BankAccount1 = new BankAccount();
const BankAccount2 = new BankAccount();
BankAccount1.balance = 1000;
BankAccount2.balance = -1000;
console.log(`Balance of the 1st Bank account is ${BankAccount1.balance}`);
console.log(`Balance of the 2nd Bank account is ${BankAccount2.balance}`);
//# sourceMappingURL=BankAccountBalance.js.map