"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express from 'express';
const express = require("express");
const environment_1 = require("../global/environment");
class server {
    constructor() {
        this.app = express();
        this.port = environment_1.SERVER_PORT;
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = server;
