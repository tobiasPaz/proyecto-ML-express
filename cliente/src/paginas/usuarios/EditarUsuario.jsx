import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const cargarUsuario = async () => {
    let data = await fetch(`http://localhost:4000/usuarios/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  };

  function handleChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function EditarUsur() {
    fetch(`http://localhost:4000/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
      }),
    })
      .then((data) => {
        navigate("/usuarios/" + id);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("enviado", usuario);
  }

  useEffect(() => {
    cargarUsuario();
  }, []);

  return (
    <>
      <h1>editar perfil</h1>
      <label htmlFor="nombre">
        nombre
        <input
          value={usuario.nombre}
          onChange={handleChange}
          type="text"
          id="nombre"
          name="nombre"
        ></input>
      </label>
      <br />
      <label htmlFor="apellido">
        apellido
        <input
          value={usuario.apellido}
          onChange={handleChange}
          type="text"
          id="apellido"
          name="apellido"
        ></input>
      </label>
      <br />
      <label htmlFor="email">
        email
        <input
          value={usuario.email}
          onChange={handleChange}
          type="text"
          id="email"
          name="email"
        ></input>
      </label>
      <br />
      <button onClick={EditarUsur}>enviar</button>
    </>
  );
}

export default EditarUsuario;
