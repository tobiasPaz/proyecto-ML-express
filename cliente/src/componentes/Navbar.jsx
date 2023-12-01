import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ logeado, setLogeado }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  const linksLogeado = () => {
    return (
      <div>
        <button
          onClick={async () => {
            await fetch("http://localhost:4000/usuarios/logout", {
              credentials: "include",
            });

            await fetch("http://localhost:4000/usuarios/usuario-logeado", {
              credentials: "include",
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                setLogeado(data);
              });
          }}
          className="btn btn-primary"
        >
          Cerrar Sesion
        </button>
      </div>
    );
  };

  const linksDeslogeado = () => {
    return (
      <div>
        <button
          onClick={() => navigate("/registrarse")}
          className="btn btn-primary"
        >
          Registrarse
        </button>
        <button onClick={() => navigate("/login")} className="btn btn-primary">
          Iniciar Sesion
        </button>
      </div>
    );
  };

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
              <Link className="nav-link" to="Categorias">
                Categorias
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Publicaciones">
                Publicaciones
              </Link>
            </li>
          </ul>
          <ul>{logeado.logeado ? linksLogeado() : linksDeslogeado()}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
