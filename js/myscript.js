for (let i = 0; i < 10 ; i++) {
    
    let divElement = document.createElement("div");
    const boxContainer = document.getElementById("my-box-container");
    boxContainer.append(divElement);

    boxContainer.classList.add("d-flex", "flex-wrap")
    divElement.classList.add("my-box");

    if( (i % 3) == 0){
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-green", "text-center");
        divElement.innerHTML = ("fizz");
        
    } else if ((i % 5) == 0) {
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-red", "text-center");
        divElement.innerHTML = ("buzz");

    } else if (( (i % 3) == 0) && ( (i % 5) == 0) ){
        boxContainer.append(divElement);
        divElement.classList.remove("my-box", "text-center");
        divElement.innerHTML = ("fizzbuzz");
    }
}


