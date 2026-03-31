class BankAccount{
    private _balance : number = 0;
    public set balance(newBalance: number){
        if(newBalance < 0){
            throw new Error("Balance is unsufficient");
        }
        this._balance = newBalance;
    }

    public get balance(){
        return this._balance;
    }
}

const BankAccount1:BankAccount = new BankAccount();
const BankAccount2:BankAccount = new BankAccount();
BankAccount1.balance = 1000;
BankAccount2.balance = -1000;
console.log(`Balance of the 1st Bank account is ${BankAccount1.balance}`);
console.log(`Balance of the 2nd Bank account is ${BankAccount2.balance}`);