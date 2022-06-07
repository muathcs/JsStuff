https://api.advicesLip.com/advice


fetch("https://api.advicesLip.com/advice")
.then(result =>result.json()).then(data => console.log(data))

fetch("https://api.advicesLip.com/advice")
.then(result => console.log(result))
console.log("hi")