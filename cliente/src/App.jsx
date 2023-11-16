// import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

import Principal from "./componentes/Principal";
import Usuarios from "./componentes/Usuarios";

import Navbar from "./componentes/sub-componentes/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/inicio" element={<Principal />} />
        <Route path="/usuarios" element={<Usuarios></Usuarios>} />
      </Routes>
    </>
  );
}

export default App;
