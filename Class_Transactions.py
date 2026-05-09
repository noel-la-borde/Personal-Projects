import time

class Transaction:
    
    def __init__ (self, amount):
        self.amount = amount 
        #self.time= time.time()
        self.formattedTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

    def getAmount(self):
        return self.amount 
    
    def getReadableTime(self):
        return self.formattedTime
    
    def __str__(self):
        return f"{'Deposit' if self.amount >= 0 else 'Withdrawal'}: ${abs(self.amount):.2f} on {self.getReadableTime()}"
        
    

t= Transaction (38)
print(f"The transaction date/time is {t.getReadableTime()}")
print(f"The transaction amount is {t.getAmount()}")