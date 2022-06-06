import { Router } from "express";

const server = Router();

import {cadastrar, consultar} from '../repository/tabelaRepository.js'


server.post(cadastrar, async (req, resp) => {
    try{
        const {nome} = req.query;
        const resposta = await cadastrar(nome);

        resp.send(resposta)
    }catch(err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
}) 


server.get(consultar, async (req, resp) =>{
    try{
        const {id, nome} = req.body;
        const resposta = await consultar(id, nome);
        
        resp.send(resposta)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;