var txt;
var r = confirm("Enjoy Your journey learning!");
if (r == true) {
var number = prompt("How many GIF you want to see? ");
for(var i = 0; i < number; i++) {
  document.write('<img src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif" alt="">');
}


} else {
  alert("please visit us again");
}

var correct = "yes";
var guess = "";
while (guess != correct){
  guess = prompt ("Type yes or you will not enter", "");
  if (guess == correct){
    alert ("Correct");
  } else {
    alert ("opss sorry bye ...");
  }
}
var name =prompt("whats your name");
function printMyName(myName) {
    alert("happy to meet you  " + myName);

}

printMyName(name);



