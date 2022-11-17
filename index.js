/* 
    title : Uptime monitoring application 
    Description : A RESTFul API TO monitor up or down time of user defined links
    Author : ABDUR RAIHAN (  IDEA FROM LWS)
    DATE : 17/11/2022

 */


    // dependencies

    const http = require('http');
    const url = require('url');
    const { StringDecoder } = require('node:string_decoder');


    // app object - module Scaffolding 

    const app = {};

    // configuration 

    app.config = {
        port : 7000,
    };

    // create server

    app.createServer = () =>{
        const server = http.createServer(app.handleReqRes);

        server.listen(app.config.port, ()=>{
            console.log(`listening to port ${app.config}`);
        } );
    }


    // handle request response 

    app.handleReqRes = (req , res) => {

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

    app.createServer();