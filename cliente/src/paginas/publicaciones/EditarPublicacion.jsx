import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditaPublicaion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    contenido: "",
    categoria: { nombre: "" },
  });

  function loadPublicacion() {
    fetch(`http://localhost:4000/publicaciones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicacion(data);
      });
  }

  function handleChange(e) {
    setPublicacion({ ...publicacion, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    fetch(`http://localhost:4000/publicaciones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...publicacion,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(publicacion);
        navigate("/publicaciones");
      }
    });
  }

  useEffect(() => {
    loadPublicacion();
  }, []);
  return (
    <div>
      <h1>Editar</h1>
      <label htmlFor="titulo">
        titulo
        <input
          onChange={handleChange}
          type="text"
          id="titulo"
          value={publicacion.titulo}
          name="titulo"
        />
      </label>
      <br />
      <label htmlFor="contenido">
        contenido
        <input
          onChange={handleChange}
          type="text"
          id="contenido"
          value={publicacion.contenido}
          name="contenido"
        />
      </label>
      <br />
      <label htmlFor="categoria">
        categoria
        <input
          onChange={handleChange}
          type="text"
          id="categoria"
          value={publicacion.categoria.nombre}
          name="categoria"
        />
      </label>
      <br />
      <button onClick={handleSubmit}>enviar</button>
    </div>
  );
}

export default EditaPublicaion;
