const capitalise =  ( sentence) =>{
    let newArr = sentence.split(' ')
   let result = []
    for(let i = 0; i< newArr.length; i++){
     result.push (newArr[i][0].toUpperCase() + newArr[i].slice(1))
    }
    return result.join(' ')
}
console.log(capitalise("hello world is very common"))