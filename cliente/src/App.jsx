// import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

import Principal from "./paginas/Principal";
import Usuarios from "./paginas/usuarios/Usuarios";
import Registro from "./paginas/usuarios/Registro";
import Login from "./paginas/usuarios/Login";
import Usuario from "./paginas/usuarios/Usuario";
import EditarUsuario from "./paginas/usuarios/EditarUsuario";

import Categorias from "./paginas/categorias/Categorias";
import Categoria from "./paginas/categorias/Categoria";
import CrearCategoria from "./paginas/categorias/CrearCategoria";
import EditarCategoria from "./paginas/categorias/EditarCategoria";

import Publicaciones from "./paginas/publicaciones/Publicaciones";
import Publicacion from "./paginas/publicaciones/Publicacion";
import CrearPublicacion from "./paginas/publicaciones/CrearPublicacion";
import EditarPublicacion from "./paginas/publicaciones/EditarPublicacion";

import useAuth from "./componentes/UseAuth";

import Navbar from "./componentes/Navbar";

import { Routes, Route, Navigate } from "react-router-dom";

function RutaProtegidaLogeado({ children }) {
  const { logeado, cargando } = useAuth();
  if (cargando) {
    return <div>Cargando...</div>;
  }
  return logeado.logeado ? (
    children
  ) : (
    <Navigate to="/login" state={{ alert: "no estas logeado" }} />
  );
}

function RutaProtegidaAdmin({ children }) {
  const { logeado, cargando } = useAuth();
  if (cargando) {
    return <div>Cargando...</div>;
  }
  return logeado.logeado && logeado.usuario.admin ? (
    children
  ) : (
    <Navigate to="/" state={{ alert: "no tienes permisos para eso" }} />
  );
}

function App() {
  const { logeado, setLogeado } = useAuth();

  return (
    <>
      <Navbar logeado={logeado} setLogeado={setLogeado}></Navbar>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/usuarios" element={<Usuarios></Usuarios>} />
        <Route path="/usuarios/:id" element={<Usuario></Usuario>} />
        <Route
          path="/registrarse"
          element={
            <Registro setLogeado={setLogeado} logeado={logeado}></Registro>
          }
        />
        <Route
          path="/login"
          element={<Login setLogeado={setLogeado} logeado={logeado}></Login>}
        />
        <Route
          path="/usuarios/editar/:id"
          element={<EditarUsuario></EditarUsuario>}
        />

        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:id" element={<Categoria />} />
        <Route
          path="/categorias/crear"
          element={
            <RutaProtegidaAdmin>
              <CrearCategoria />
            </RutaProtegidaAdmin>
          }
        />
        <Route path="/categorias/editar/:id" element={<EditarCategoria />} />

        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route
          path="/publicaciones/:id"
          element={<Publicacion logeado={logeado} />}
        />
        <Route
          path="/publicaciones/crear"
          element={
            <RutaProtegidaLogeado>
              <CrearPublicacion logeado={logeado} />
            </RutaProtegidaLogeado>
          }
        />
        <Route
          path="/publicaciones/editar/:id"
          element={<EditarPublicacion />}
        />
      </Routes>
    </>
  );
}

export default App;
