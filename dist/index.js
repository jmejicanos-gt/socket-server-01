"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const router_1 = require("./routes/router");
const cors = require("cors");
const bodyParser = require("body-parser");
//const bodyParser =  require('body-parser');
//import { SERVER_PORT } from './global/environment';
//const nombre = 'Julio Meji'
//console.log(`Mi nombre es ${ nombre }`);
const server = new server_1.default();
server.app.use.apply(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
//
server.app.use(cors({ origin: true, credentials: true }));
//rutas de servicios
server.app.use('/', router_1.router);
server.start(() => {
    //  console.log(`Servidor corriendo en el puerto ${SERVER_PORT} `)
    console.log(`Servidor corriendo en el puerto ${server.port} `);
});
