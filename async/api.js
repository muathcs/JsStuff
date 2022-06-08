import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000104eee95f211e4d039c8aff2189b0e66a');

// All requests made with the client will be authenticated


fetch("https://api.advicesLip.com/advice")
.then(result =>result.json()).then(data => console.log(data))

fetch("https://api.advicesLip.com/advice")
.then(result => console.log(result))
console.log("hi")

fetch(client)