for (let i = 0; i < 10 ; i++) {
    
    let divElement = document.createElement("div");
    const boxContainer = document.getElementById("my-box-container");
    boxContainer.append(divElement);
    boxContainer.classList.add("d-flex")
    divElement.classList.add("my-box");
    /* div.classList.add("foo", "bar", "baz"); */
    
    if( (i % 3) == 0){
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-green");
        
    } else if ((i % 5) == 0) {
        
        boxContainer.append(divElement);
        divElement.classList.add("my-box-red");
    } else if (( (i % 3) == 0) && ( (i % 5) == 0) ){
        boxContainer.append(divElement);
        divElement.classList.remove("my-box");
    }
}


