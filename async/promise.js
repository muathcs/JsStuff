const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(new Error("Reached error, fialutre to diplay"))
    }, 2000);
})


promise
.then(user=>{
    console.log(user)
})
.catch(err =>{
    console.log(err.message)
})