import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarPet(nome){
    const r = await api.post ('./pages/cadastro',{ 
    nome:nome}
    )
    return r.data 
}



export async function salvarBotao(){
     
}