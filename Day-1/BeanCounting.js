const string1 = "Bollu Himana "
const string2 = "Bollu Himana is learning javascript"
const letter = 'a'

function countBs(str1) {
    count = 0;
    for(let i = 0; i < string1.length; i++) {
        if(string1[i] === "l") {
            count=count+1;
        }
    }
    console.log(count)
    // return count
    }

countBs(string1)    
