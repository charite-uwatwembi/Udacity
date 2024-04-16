// function compressString(str){
//     let newArray = str.toUpperCase().split()
//     let result = []
//     let count = 1;
//     for(let i = 0; i < newArray.length; i++){
//         if(newArray[i] === newArray[i+1]){
//             count ++;
            
//         }
//         newArray[i] += count;
//         console.log(newArray[i])
//         count = 1
    
//     }
//     console.log(newArray)

// }
// compressString('AAABBBBDDODDDEEE')

function compress (s){
    let string = []
    newArr = s.toUpperCase().split('')
    let count = 1
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] === newArr[i+1]){
            count++
        } else {
            string.push(s[i]+count)
            count = 1
        }
    }
    return string.join('')
}
console.log(compress('AAABBBBDDODDDEEE'))

