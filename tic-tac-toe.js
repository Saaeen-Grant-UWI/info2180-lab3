//Exercise 1
const load = () => {
    const board =  document.getElementById("board")
    const boardSquares = board.querySelectorAll("div")
    const status =  document.getElementById("status")
    const defaultStatus = "Move your mouse over a square and click to play an X or an O."
    const btn = document.querySelector(".btn")

    boardSquares.forEach(element => element.setAttribute("class", "square"))

   


    //Exercise 2
    let currentAction = []
    boardSquares.forEach(element => element.addEventListener("click", () => {

        if ((currentAction.length == 0)) {
            element.classList.add("X")
            element.innerText = "X"
        } 
        else if (currentAction[0].classList.contains("X") && !(element.classList.contains("X"))) {
            element.classList.add("O")
            element.innerText = "O"
        } 
        else if (currentAction[0].classList.contains("O") && !(element.classList.contains("O"))){
            element.classList.add("X")
            element.innerText = "X"
        }

        currentAction[0] = element  

     
        checkWinner(currentAction)
   
    }))

    //Exercise 3
    boardSquares.forEach(element => element.addEventListener("mouseover", () => {element.classList.add("hover")}))
    boardSquares.forEach(element => element.addEventListener("mouseout", () => {element.classList.remove("hover")}))



    //Exercise 4
    const checkWinner = (currentAction) => {

        const winningCombinations = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        winningCombinations.forEach(combination => {
            if( combination.every(index => boardSquares[index].classList.contains(currentAction[0].innerText))) {
                 status.innerText = `Congratulations! ${currentAction[0].innerText}  is the Winner!`
                 status.classList.toggle("you-won")
                 board.style.pointerEvents = "none"
 
            }
         })
    }


    //Exercise 5
    btn.addEventListener("click", () => {
        location.reload();
    })
    



}

document.addEventListener("DOMContentLoaded", load);