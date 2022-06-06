

// function otherFunction(){
//     console.log("other function")
//     for (let i = 0; i < 10000; i++) {
//      console.log(".") 
//     }
//     console.log("do stuff")
// }

// console.log("hi")

// otherFunction();

// console.log("end")


console.log("hi")

// setTimeout(() => {
//     console.log("six sec hello")
// }, 6000)

// setTimeout(() => {
//     console.log("2 sec hello")
// }, 2000)

const items = [1,2,3,4,5,6,7,8,9,10]

function login(email, password){
    return new Promise((resolve, reject) => {;
        setTimeout(() => {
            console.log("NOW WE HAVE THE DATA");
            resolve({userEmail: email});
        }, 5000);
})
}

function vidoes(email){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(['vidoe1', 'video2', 'video3'])
    }, 1000);
    });
}

login("devedF@gmail.com", 12345)
.then(user => console.log(user))
