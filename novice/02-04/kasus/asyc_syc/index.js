// const request = require('request');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });

// const axios = require('axios');

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const http =require('http');

// const handleServer =(request,response)=>{
//     response.writeHead(200,{
//         'Content-Type' : 'text/html'
//     })
//     response.end('hello word')
// }
// http.createServer(handleServer).listen(5432,'127.0.0.1')

// console.log('coba cliki http://127.0.0.1:5432')

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))