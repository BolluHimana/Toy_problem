class LRUCache():

    def _init_(self,k):
        self.k = k
    list = []        

    def put(self,k):
        if len(self.list) == 6:
	        if k not in self.list:
		        self.list.pop(0)
		        self.list.append(k)
		
	        else:
		        self.list.remove(k)
		        self.list.append(k)
        else:
	        if k not in self.list:
		        self.list.append(k)
	        else:
		        self.list.remove(k)
		        self.list.append(k)

    def get(self): 
        return self.list[0]
    def get_cache(self):
        return self.list