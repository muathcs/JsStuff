const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty")

// Event listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop through empty

// Drag functions
function dragStart(){
    this.className += " hold";
    setTimeout(()=>{
        this.className= "invisible"
    },0)
    console.log("start")
}

function dragEnd(){
    this.className = "fill"
}