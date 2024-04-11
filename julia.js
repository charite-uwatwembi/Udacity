let num = 1;

while (num <= 20) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("JuliaJames");
    } else if (num % 3 === 0) {
        console.log("Julia");
    } else if (num % 5 === 0) {
        console.log("James");
    } else {
        console.log(num);
    }
    num++;
}
 