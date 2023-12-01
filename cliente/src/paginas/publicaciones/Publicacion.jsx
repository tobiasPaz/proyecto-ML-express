import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CrearComentario from "../../componentes/CrearComentario";

function Publicacion({ logeado }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publicacion, setPublicacion] = useState({
    autor: {},
    comentarios: [{ autor: {} }],
    categoria: {},
  });

  function loadPublicacion() {
    fetch(`http://localhost:4000/publicaciones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicacion(data);
        console.log(data.comentarios);
      });
  }

  function cargarComentarios(e) {
    let list = e.map((comentario) => {
      return (
        <div key={comentario._id}>
          <h5>autor: {comentario.autor._id}</h5>
          <p>{comentario.contenido}</p>
          <p>puntuacion: {comentario.puntuacion}</p>
          {logeado.usuario._id == comentario.autor._id ? (
            <button
              onClick={() => {
                fetch(`http://localhost:4000/comentarios/${comentario._id}`, {
                  method: "DELETE",
                  credentials: "include",
                }).then((res) => {
                  if (res.ok) {
                    loadPublicacion();
                  }
                });
              }}
            >
              borrar
            </button>
          ) : null}
        </div>
      );
    });
    return list;
  }

  useEffect(() => {
    loadPublicacion();
  }, []);

  return (
    <div>
      <h1>Publicacion</h1>
      <h2>titulo: {publicacion.titulo}</h2>
      <h4>autor: {publicacion.autor._id}</h4>
      <h3>contenido: {publicacion.contenido}</h3>
      <h4>comentarios: {cargarComentarios(publicacion.comentarios)}</h4>
      <h4>categoria: {publicacion.categoria.nombre}</h4>
      <button
        onClick={() => {
          fetch(`http://localhost:4000/publicaciones/${id}`, {
            method: "DELETE",
            credentials: "include",
          }).then((res) => {
            if (res.ok) {
              navigate("/publicaciones");
            }
          });
        }}
      >
        eliminar publicacionss
      </button>
      <button onClick={() => navigate(`/publicaciones/editar/${id}`)}>
        modificar publicacion
      </button>
      <br />
      {logeado.logeado ? <CrearComentario logeado={logeado} id={id} /> : null}
    </div>
  );
}

export default Publicacion;
