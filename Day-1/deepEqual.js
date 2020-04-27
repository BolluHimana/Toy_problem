function deepEqual(p, q) {
    if (p === q) {
      // items are identical
      return true;
    } else if (typeof p === 'object' && p !== null && typeof q === 'object' && q !== null) {
      let keys = Object.keys(p).concat(Object.keys(q));
      for (i of keys) {
        if (typeof p[i] === 'object' && typeof q[i] === 'object') {
          if (deepEqual(p[i], q[i]) === false) {
            return false;
          }
        } else if (p[i] !== q[i]) {
          return false;
        }
      }
      return true;
    } 
    else 
    {
     return false; 
    }
  }
obj1 = {fn:"Bollu",ls:"Himana"}
obj2 = {fn:"bh",number:55}
str1 = "Bollu"
str3 = "okay"
str2 = 501
console.log(deepEqual(obj1,obj2))
console.log(deepEqual(str2,str1))
console.log(deepEqual(str1,str1))