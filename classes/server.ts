


//import express from 'express';
import express =  require('express');
import { SERVER_PORT } from '../global/environment';


export default class server {
    public app: express.Application ;
    public port: number;

    constructor(){

        this.app=express();
        this.port = SERVER_PORT;

    }


start (callback: any){
      
    this.app.listen(this.port, callback);

}

}