import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  useNavigate(
    fetch("http://localhost:4000/usuarios/usuario-logeado")
      .then((res) => res.json())
      .then((data) => setUsuario(data)),
    []
  );

  function condicion(data) {
    if (data.msg == "No hay usuario logeado") {
      return (
        <div>
          <button
            onClick={() => navigate("/registrarse")}
            className="btn btn-primary"
          >
            Registrarse
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary"
          >
            Iniciar Sesion
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button>cerrar sesion</button>
        </div>
      );
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Usuarios">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
          </ul>

          {condicion(usuario)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
