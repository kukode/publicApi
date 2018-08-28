const https = require('https')
// const http = require('http')

let options = {
    hostname : "jsonplaceholder.typicode.com",
    port: 443,
    path: "/posts",
    method: "GET"
};
const req = https.request(options,(res)=>{

    //let a = '';
    console.log('STATUS ' + res.statusCode)
    
    res.on('data',(chunk)=>{
        console.log('BODY ' + chunk)
    })
    res.on('end',()=>{
        console.log('no more data')
    })
})
req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
req.end();








