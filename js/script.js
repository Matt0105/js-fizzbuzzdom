const container = document.querySelector(".container");

//genero numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    
    const card = document.createElement("div");
    card.classList.add("square");

    //capisco se è divisibile per 3 per 5 o per entrambi
    if(i % 3 == 0 && i % 5 != 0) {
        card.append("Fizz");
        container.append(card);
    }
    else if(i % 5 == 0 && i % 3 != 0) {
        card.append("Buzz");
        container.append(card);
    }
    else if(i % 3 == 0 && i % 5 == 0) {
        card.append("FizzBuzz");
        container.append(card);
    }
    else {
        card.append(i);
        container.append(card);
    }
}