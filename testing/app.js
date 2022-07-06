
function print() {
    return this
}

const hello = () => {
    return this
}

// Spread operators
const myArr = ["hello", "jello"]
const newArr = ["name", "tame", ...myArr, "cals"]


// newArr.forEach(item =>{
//     console.log(item)
// })

function addThreeNumber(x,y,z){
    console.log(x+z+y);
}

const args = [1,2,3];

addThreeNumber(...args);
const newArgs = [...args]
const newArgs2 = [...args, ...newArgs]

// console.log(newArgs2)

// Rest operators 

function multiply(multiplier, ...theArgs){
    return theArgs.map(item =>{
        return multiplier * item;
    })
}

const arr = multiply(2, 5, 10, 20)

console.log(arr);

// object destructering

const person = {
    name: "muath", 
    age:21, 
    gender:"male"
    
}

let {name, age, gender="unkown"} = person;

console.log(name);
console.log(age);
console.log(gender)