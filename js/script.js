//genero numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    //capisco se è divisibile per 3 per 5 o per entrambi
    if(i % 3 == 0 && i % 5 != 0) {
        console.log("fizz");
    }
    else if(i % 5 == 0 && i % 3 != 0) {
        console.log("buzz");
    }
    else if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}