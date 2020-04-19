from LRUcache import LRUCache
class LRUtest:
    def __init__(self):
         self.lru_cache=LRUCache()

    def put(self, k):
        return self.lru_cache.put(k) 

    def get(self):
        return self.lru_cache.get() 

    def get_cache(self):
        return self.lru_cache.get_cache()          

def main():
        LRUtest_obj=LRUtest()
        LRUtest_obj.put(1)
        LRUtest_obj.put(2)
        LRUtest_obj.put(3)
        LRUtest_obj.put(2)
        assert LRUtest_obj.get() == 1
        assert [1,3,2] == LRUtest_obj.get_cache()
        LRUtest_obj.put(4)
        LRUtest_obj.put(5)
        LRUtest_obj.put(4)
        LRUtest_obj.put(6)
        assert [1,3,2,5,4,6] == LRUtest_obj.get_cache()
        print("All the Test cases are passed")

if __name__ == '__main__':
        main()  
          