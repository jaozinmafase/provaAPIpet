import { Router } from "express";

const server = Router();

import {cadastrar, consultar} from '../repository/tabelaRepository.js'


server.post('/tabela/cadastrar', async (req, resp) => {
    try{
        const novoPet = req.body;
        const resposta = await cadastrar(novoPet);
                
        resp.send(resposta)
    }catch(err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
}) 


server.get('/tabela', async (req, resp) =>{ 
    try{
        const resposta = await consultar();
        resp.send(resposta)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;