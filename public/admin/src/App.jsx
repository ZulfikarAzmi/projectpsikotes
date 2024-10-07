import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Soal from "./pages/soal";
import PrivateRoute from "./utils/private-route";
import TabelSoal from "./pages/tabel_soal";

function app() {
  return(
   <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute/>} >
        <Route path ="/soal" element = {<Soal/>}/>
      </Route>
      <Route path ="/" element = {<Navigate to ="/login"/>}/>
      <Route path ="/login" element = {<Login/>}/>
      <Route path ="/tabel_soal" element ={<TabelSoal/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default app