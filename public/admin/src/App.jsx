import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Soal from "./pages/soal";
import PrivateRoute from "./utils/private-route";
import TabelSoal from "./pages/tabel_soal";
<<<<<<< HEAD
=======
import Ujian from "./pages/ujian";
>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6

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
<<<<<<< HEAD
=======
      <Route path ="/ujian" element ={<Ujian/>}/>
>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6
    </Routes>
   </BrowserRouter>
  )
}

export default app