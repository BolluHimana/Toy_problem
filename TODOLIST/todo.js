var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var s = document.createElement("S");
  var cont = document.createTextNode("");
  s.className = "close";
  s.appendChild(cont);
  myNodelist[i].appendChild(s);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);
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
  document.getElementById("Task").value = "";
  var s = document.createElement("S");
  var cont = document.createTextNode("");
  s.className = "close";
  s.appendChild(cont);
  li.appendChild(s);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}