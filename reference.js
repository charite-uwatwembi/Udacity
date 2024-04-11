let myObj = {
    name : "charite",
    age : 5
};
(function () {
    myObj.age += 17
console.log(myObj);
}) (myObj)