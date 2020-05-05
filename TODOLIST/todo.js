    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var s = document.createElement("S");
      var cont = document.createTextNode("");
      s.className = "close";
      s.appendChild(cont);
      myNodelist[i].appendChild(s);
    }
   
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("Task").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
      alert("please enter text!!");
      } else {
        document.getElementById("list").appendChild(li);
      }
    }