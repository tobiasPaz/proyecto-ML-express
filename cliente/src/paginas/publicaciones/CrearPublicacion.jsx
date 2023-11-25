import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CrearPublicacion({ logeado }) {
  const navigate = useNavigate();
  const usuario = logeado.usuario._id;
  const [categorias, setCategorias] = useState([]);
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    contenido: "",
    categoria: "",
  });

  function loadCategorias() {
    fetch("http://localhost:4000/categorias")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data);
      });
  }
  function optionCategorias(e) {
    const lista = categorias.map((e) => {
      return (
        <option key={`${e._id}`} value={e._id}>
          {e.nombre}
        </option>
      );
    });
    return lista;
  }

  function handleChange(e) {
    setPublicacion({ ...publicacion, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    console.log({
        ...publicacion,
        autor: usuario,
      });
    console.log(publicacion);
    fetch("http://localhost:4000/publicaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...publicacion,
        autor: usuario,
      }),
    }).then((res) => {
      if (res.ok) {
        navigate("/publicaciones");
      }
    });
  }

  useEffect(() => {
    loadCategorias();
  }, []);

  return (
    <div>
      <h1>Crear publicacion</h1>
      <div>
        <label htmlFor="titulo">
          titulo
          <input
            type="text"
            onChange={handleChange}
            id="titulo"
            name="titulo"
          />
        </label>
        <br />
        <label htmlFor="contenido">
          contenido
          <textarea
            value={publicacion.contenido}
            type="text"
            onChange={handleChange}
            id="contenido"
            name="contenido"
          />
        </label>
        <br />
        <select value="" onChange={handleChange} name="categoria">
          <option>categorias</option>
          {optionCategorias(categorias)}
        </select>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Publicar
        </button>
      </div>
    </div>
  );
}

export default CrearPublicacion;
