import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login({ setLogeado, logeado }) {
  const navigate = useNavigate();
  const { state } = useLocation();
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

  async function handleSubmit() {
    await fetch("http://localhost:4000/usuarios/login", {
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

    await fetch("http://localhost:4000/usuarios/usuario-logeado", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLogeado(data);
        if (data.logeado) {
          navigate("/");
        }
      });
  }

  return (
    <div>
      <h1>Iniciar Sesion</h1>
      {state ? (
        <h2 style={{ color: "white", backgroundColor: "red" }}>
          {state.alert}
        </h2>
      ) : null}
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
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Login;
