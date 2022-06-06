import 'dotenv/config'

import express from "express";
import cors from "cors" ;

import tabelaController from '../src/controller/tabelaController.js';


const server = express();

server.use(cors());
server.use(express.json());
server.use(tabelaController)


server.listen(process.env.PORT,() => console.log(`API conectada na porta ${process.env.PORT}`))