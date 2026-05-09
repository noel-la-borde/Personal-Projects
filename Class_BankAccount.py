from Class_Transactions import Transaction
from Bank_Unordered_List import UnorderedList

class BankAccount:

    def __init__(self):
       #self.totalAmount= 0
       # self.allDeposits = []
       # self.allWithdrawls = []
       # self.allTransactions[]
        self.allTransactions= UnorderedList()
    
    def deposit(self, amount):
        if amount > 0: 
            self.allTransactions.add(Transaction(amount))
    
    def withdrawal(self, amount):
        if amount > 0: 
            self.allTransactions.add(Transaction(-amount))
    
    def getBalance(self):
        return sum(t.getAmount() for t in self.allTransactions.getAll())
    
    def printStatement(self):
        for t in self.allTransactions.getAll():
            print(t)
    
    def __gt__(self, other):
        return self.getBalance() > other.getBalance()
    
    def __lt__(self, other):
        return self.getBalance() < other.getBalance()
    
savings = BankAccount()
savings.deposit(50)
savings.deposit(100)
savings.deposit(200)
savings.withdrawal(75)
print(f"The savings current balance is {savings.getBalance()} ")
savings.printStatement()
checking = BankAccount()
checking.deposit(50)
checking.deposit(100)
checking.withdrawal(75)
checking.withdrawal(20)
print(f"The checking current balance is {checking.getBalance()} ")
checking.printStatement()
print(savings > checking)
