

//dependency 
const { StringDecoder } = require('node:string_decoder');

    
// helper object - module Scaffolding 
const handler = {};


handler.handleReqRes = (req , res) => {

    // request handling
    // get the url and parse it 
    const parsedUrl = url.parse(req.url , true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    
    const decoder = new StringDecoder('utf8');
    let realData = '';

    req.on('data',(Buffer)=>{
        realData += decoder.write(Buffer);
    });

    req.on('end' , () => {
        realData += decoder.end();
        console.log(realData);
        res.end('hello program');
    })
    
    res.end('hi')

    // response handle
    
}


module.exports = handler;