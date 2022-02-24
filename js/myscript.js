for (let i = 0; i < 101 ; i++) {
    
    let divElement = document.createElement("div");
    const boxContainer = document.getElementById("my-box-container");
    boxContainer.append(divElement);
    boxContainer.classList.add("row");
    
    divElement.classList.add("my-box");
    boxContainer.classList.add("d-flex", "flex-wrap", "gy-2", "gx-4", "justify-content-center");


    if( ((i % 3) == 0) && ((i % 5) != 0) ){
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-green", "text-center");
        divElement.innerHTML = ("fizz");
        
    } else if (((i % 5) == 0)   && ((i % 3) != 0)) {
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-red", "text-center");
        divElement.innerHTML = ("buzz");

    } else if (( (i % 3) == 0) && ( (i % 5) == 0) ){
        boxContainer.append(divElement);
        divElement.classList.add("my-box-blue", "text-center");
        divElement.innerHTML = ("fizzbuzz");
    } else {
        divElement.classList.add("my-box-black", "text-center", "text-white");
        divElement.innerHTML = ("indivisibile");
    }
}


