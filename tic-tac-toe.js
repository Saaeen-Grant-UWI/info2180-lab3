const load = () => {
    const board =  document.getElementById("board")
    const boardSquares = board.querySelectorAll("div")
    let clickArray = []


    boardSquares.forEach(element => element.setAttribute("class", "square"))

    boardSquares.forEach(element => element.addEventListener("click", () => {

        if ((clickArray.length == 0)) {
            element.classList.add("X")
            element.innerText = "X"
        } 
        else if (clickArray[0].classList.contains("X")) {
            element.classList.remove("X")
            element.classList.add("O")
            element.innerText = "O"
        } 
        else {
            element.classList.remove("O")
            element.classList.add("X")
            element.innerText = "X"
        }

        clickArray[0] = element  

        
      
        
    }))

}

document.addEventListener("DOMContentLoaded", load);