const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty")
const clicked = document.querySelectorAll(".clicked")


function onClick(div){
    document.querySelectorAll(".clicked").forEach(clicked =>{
        clicked.classList.remove("clicked");
    })
    this.classList.add("clicked")
    console.log("this", this)
}

document.querySelectorAll(".empty").forEach(div=>{
    div.addEventListener("click", onClick)
})

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
}

function dragEnd(){
    this.className = "fill"
}

function dragOver(e){
    e.preventDefault();
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

