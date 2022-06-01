const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty")

// Event listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop through empty

empties.forEach(empty=>{
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
})

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

function dragOver(e){
    e.preventDefault();
    console.log(this)
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("hovered")
}
function dragLeave(){
    this.classList.remove("hovered")
}
function dragDrop(){
    this.classList.remove("hovered")
    this.append(fill)
}