import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Usuario() {
  const navigate = useNavigate();

  async function logeado() {
    const data = await fetch("http://localhost:4000/usuarios/usuario-logeado", {
      credentials: "include",
    });
    const usuario = await data.json();
    console.log("usuario", usuario);
  }

  const { id } = useParams();
  const [usuario, setUsuario] = useState({});
  async function cargarUsuario() {
    let data = await fetch(`http://localhost:4000/usuarios/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }
  useEffect(() => {
    cargarUsuario();
    logeado();
  }, []);
  return (
    <>
      <h1>perfil</h1>
      <h2>nombre: {usuario.nombre}</h2>
      <h2>apellido: {usuario.apellido}</h2>
      <h2>email: {usuario.email}</h2>
      <button onClick={() => navigate("/usuarios/editar/" + id + "")}>
        editar usuario
      </button>
      <button
        onClick={async () => {
          await fetch(`http://localhost:4000/usuarios/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
          navigate("/usuarios");
        }}
      >
        eliminar
      </button>
    </>
  );
}

export default Usuario;
