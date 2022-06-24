import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Cadastro from './pages/cadastro/cadastro.js';




export default function index() {

    return (<BrowserRouter>
                <Routes>
                    <Route path = './cadastro/cadastro.js' element= {<Cadastro/>}/>
                </Routes>
         </BrowserRouter>)
}


