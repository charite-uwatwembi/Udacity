//var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
// remove blackberry
rainbow.splice(2,1);
//add yellow and green
rainbow.splice(2,0,"yellow","green")
//add purple
rainbow.push("purple");

console.log(rainbow);