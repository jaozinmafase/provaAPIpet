import { con } from './connection.js'




export async function cadastrar (nome){
    const comando = `
    insert into    nm_pet
         values     = ?;`

    const [resposta] = await con.query (comando, [nome])
    return resposta;
}


export async function consultar (id, nome){
    const comando = `
    select  id_pet     ,
            nm_pet
     from   tb_pet`
     
     const [resposta] = await con.query(comando, [id, nome])
     return resposta;
}