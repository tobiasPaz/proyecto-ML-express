import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CrearComentario from "../../componentes/CrearComentario";

function Publicacion({ logeado }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publicacion, setPublicacion] = useState({
    autor: {},
    comentarios: [{ autor: {}, contenido: "", puntuacion: 5, editando: false }],
    categoria: {},
  });

  const [comText, setComText] = useState();
  const [comPunt, setComPunt] = useState();

  function loadPublicacion() {
    fetch(`http://localhost:4000/publicaciones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicacion(data);
        console.log(data.comentarios);
      });
  }

  function eliminarComentario(id) {
    fetch(`http://localhost:4000/comentarios/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        loadPublicacion();
      }
    });
  }

  function handleChangeText(e) {
    setComText(e.target.value);
  }

  function handleChangePunt(e) {
    setComPunt(e.target.value);
  }

  function cargarComentarios(e) {
    let list = e.map((comentario) => {
      return (
        <div key={`${comentario._id}`}>
          <h5>autor: {comentario.autor._id}</h5>
          {comentario.editando ? (
            <>
              <input value={comText} onChange={handleChangeText} />
              <input
                value={comPunt}
                onChange={handleChangePunt}
                type="number"
              />
            </>
          ) : (
            <p>{comentario.contenido}</p>
          )}
          <p>puntuacion: {comentario.puntuacion}</p>

          {logeado.logeado ? (
            logeado.usuario._id == comentario.autor._id ? (
              <div>
                <button
                  onClick={() => {
                    eliminarComentario(comentario._id);
                  }}
                >
                  borrar
                </button>

                {!comentario.editando ? (
                  <button
                    onClick={(e) => {
                      setPublicacion({
                        ...publicacion,
                        comentarios: publicacion.comentarios.map((c) => {
                          if (c._id == comentario._id) {
                            setComText(c.contenido);
                            setComPunt(c.puntuacion);
                            return {
                              ...c,
                              editando: !c.editando,
                            };
                          }
                          return c;
                        }),
                      });
                    }}
                  >
                    editar
                  </button>
                ) : (
                  <button onClick={(e) => {}}>enviar</button>
                )}
              </div>
            ) : null
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
      <h3>contenido: {publicacion.contenido}</h3>
      {logeado.logeado ? (
        <CrearComentario
          logeado={logeado}
          id={id}
          loadPublicacion={loadPublicacion}
        />
      ) : null}
      <h4>comentarios: {cargarComentarios(publicacion.comentarios)}</h4>
    </div>
  );
}

export default Publicacion;
