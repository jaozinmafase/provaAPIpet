import { con } from './connection.js';




export async function cadastrar(pet){
    const comando = 
    `insert into      tb_pet
           value      (mn_pet)      (?)`;  

    const [resposta] = await con.query (comando, [pet.nome])
    pet.id = resposta.insertId;
    return pet;
}


export async function consultar() {
    const comando = 
    `select  id_pet,
            nm_pet
     from   tb_pet`;
     
     const [resposta] = await con.query(comando)
     return resposta;
}