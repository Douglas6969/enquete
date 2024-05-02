import React from "react";
import { Route, Routes } from "react-router-dom";

import ListaEnquetes from "../pages/ListaEnquetes";
import AdicionarEnquetes from "../pages/AdicionarEnquete";
import Admin from "../pages/Admin";
import Sobre from "../pages/Sobre";

function Rotas (){
    return(
        <Routes>
            <Route path="lista-enquetes" element={<ListaEnquetes/>} />
            <Route path="adicionar-enquete" element={<AdicionarEnquetes/>} />
            <Route path="login" element={<Admin/>} />
            <Route path="sobre" element={<Sobre/>} />


        </Routes>
    )
}

export default Rotas