import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    fetch("http://localhost:4000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        password: usuario.password,
      }),
    });
    console.log("enviado", usuario);
  }

  return (
    <div>
      <h1>Registrarse</h1>
      <div>
        <label htmlFor="nombre">
          Nombre
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="apellido">
          Apellido
          <input
            type="text"
            name="apellido"
            value={usuario.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Contraseña
          <input
            type="password"
            name="password"
            value={usuario.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          onClick={() => {
            handleSubmit();
            navigate("/");
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Registro;
