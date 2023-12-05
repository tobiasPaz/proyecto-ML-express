import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CrearComentario({ logeado, id, loadPublicacion }) {
  const usuario = logeado.usuario._id;
  const [comentario, setComentario] = useState({
    contenido: "",
    puntuacion: 5,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setComentario({ ...comentario, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    fetch(`http://localhost:4000/comentarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...comentario,
        autor: usuario,
        publicacion: id,
      }),
    }).then((res) => {
      if (res.ok) {
        setComentario({
          contenido: "",
          puntuacion: 5,
        });
        loadPublicacion();
      }
    });
  }

  return (
    <>
      <h1>comentar</h1>
      <div>
        <textarea
          name="contenido"
          cols="70"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="puntuacion">
          puntuacion:
          <input
            type="number"
            name="puntuacion"
            onChange={handleChange}
            min="1"
            max="5"
            defaultValue={5}
            id="puntuacion"
          />
        </label>
        <br />
        <button onClick={handleSubmit}>comentar</button>
      </div>
    </>
  );
}

export default CrearComentario;
