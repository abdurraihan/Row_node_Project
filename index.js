/* 
    title : Uptime monitoring application 
    Description : A RESTFul API TO monitor up or down time of user defined links
    Author : ABDUR RAIHAN (  IDEA FROM LWS)
    DATE : 17/11/2022

 */


    // dependencies

    const http = require('http');
    const url = require('url');
    
    const {handleReqRes} = require('./helpers/handleReqRes');

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
    app.handleReqRes = handleReqRes;

    app.createServer();