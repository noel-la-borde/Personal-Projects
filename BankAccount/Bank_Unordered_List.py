
class UnorderedList: 

    def __init__(self):
        self.allTransactions = []

    def add(self, transaction):
        self.allTransactions.append(transaction)
    
    def getAll(self):
        return self.allTransactions
    
    def printTheList(self):
        for transaction in self.allTransactions:
            print (transaction)
