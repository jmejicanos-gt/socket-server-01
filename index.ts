import Server from './classes/server'
import { Router } from 'express';
import { router } from './routes/router';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
//const bodyParser =  require('body-parser');
//import { SERVER_PORT } from './global/environment';



//const nombre = 'Julio Meji'
//console.log(`Mi nombre es ${ nombre }`);

const server = new Server();

server.app.use.apply(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//
server.app.use(cors({origin:true,credentials:true}));
//rutas de servicios
server.app.use('/',router);





server.start( () =>{
  //  console.log(`Servidor corriendo en el puerto ${SERVER_PORT} `)
  console.log(`Servidor corriendo en el puerto ${server.port} `)
});