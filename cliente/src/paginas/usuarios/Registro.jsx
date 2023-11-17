import { useState } from "react";

function Registro() {
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
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          value={usuario.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={usuario.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={usuario.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}

export default Registro;
