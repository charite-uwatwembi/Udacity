//sum of positive numbers in an array
function positives(a){
    let newA= a.filter(num => num > 0)
    return newA.length > 0 ? newA.reduce((a, b)=> a + b) :0
}
console.log(positives([2,-2,4]))