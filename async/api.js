https://api.advicesLip.com/advice

fetch("https://api.advicesLip.com/advice")
.then(result =>result.json()).then(data => console.log(data.slip.advice))


console.log("hi");console.log("hello");