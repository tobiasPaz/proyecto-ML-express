// import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

import Principal from "./paginas/Principal";
import Usuarios from "./paginas/usuarios/Usuarios";
import Registro from "./paginas/usuarios/Registro";
import Login from "./paginas/usuarios/Login";

import Navbar from "./componentes/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/inicio" element={<Principal />} />
        <Route path="/usuarios" element={<Usuarios></Usuarios>} />
        <Route path="/registrarse" element={<Registro></Registro>} />
        <Route path="/Login" element={<Login></Login>} />
      </Routes>
    </>
  );
}

export default App;
