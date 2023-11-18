import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Usuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({});
  async function cargarUsuario() {
    let data = await fetch(`http://localhost:4000/usuarios/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }
  useEffect(() => {
    cargarUsuario();
  }, []);
  return (
    <>
      <h1>perfil</h1>
      <h2>nombre: {usuario.nombre}</h2>
      <h2>apellido: {usuario.apellido}</h2>
      <h2>email: {usuario.email}</h2>
    </>
  );
}

export default Usuario;
