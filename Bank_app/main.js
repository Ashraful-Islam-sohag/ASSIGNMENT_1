class BankAccount {
  constructor(accountNumber, OwnerName, balance) {
    this.accountNumber =accountNumber;
    this.OwnerName=OwnerName;
    this.balance =balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} taka into account ${this.accountNumber}.`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance`);
    } else {
      this.balance -=amount;
      console.log(`Withdrawn $${amount} taka from account ${this.accountNumber}.`);
    }
  }
  withdraw2(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance`);
    } else {
      this.balance -=amount;
      console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
    }
  }

  
 
  displayAccountInfo(accountNumber, OwnerName){
      console.log(`Account Number : ${this.accountNumber}`);
      console.log(`Owner Name : ${this.OwnerName}`);  
    }
  getBalance() {
      console.log (`Balance : $${this.balance}`);
  }
}
let account1 = new BankAccount(1001,"Jone Doe",800);
let account2 = new BankAccount(1002,"Sohag Ali",700);

account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();
account1.getBalance();
console.log();
account2.deposit(100);
account2.withdraw2(850);
account2.displayAccountInfo();
account2.getBalance();

