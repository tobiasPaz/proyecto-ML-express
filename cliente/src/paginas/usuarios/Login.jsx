import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
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
    fetch("http://localhost:4000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: usuario.email,
        password: usuario.password,
      }),
    });
    console.log("sesion iniciada", usuario);
  }

  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <div>
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

export default Login;
