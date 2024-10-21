import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Soal from "./pages/soal";
import PrivateRoute from "./utils/private-route";
import TabelSoal from "./pages/tabel_soal";
<<<<<<< HEAD

=======
>>>>>>> 0ca55ebeb5326fae190ff4253747d269e4ee08ab
import Ujian from "./pages/ujian";

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

      <Route path ="/ujian" element ={<Ujian/>}/>

=======
      <Route path ="/ujian" element ={<Ujian/>}/>
>>>>>>> 0ca55ebeb5326fae190ff4253747d269e4ee08ab
    </Routes>
   </BrowserRouter>
  )
}

export default app