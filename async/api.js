https://api.advicesLip.com/advice

fetch("https://api.advicesLip.com/advice")
.then(result =>result.json()).then(result => console.log(result))