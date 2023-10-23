const load = () => {
    const board =  document.getElementById("board")
    board.querySelectorAll("div").forEach(x => x.setAttribute("class", "square"))
    
}

document.addEventListener("DOMContentLoaded", load);