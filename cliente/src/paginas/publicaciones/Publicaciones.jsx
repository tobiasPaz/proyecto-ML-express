import { useState, useEffect } from "react";
import Card from "../../componentes/Card";
import { useNavigate } from "react-router-dom";

function Publicaciones() {
  const navigate = useNavigate();
  const [publicaciones, setPublicaciones] = useState([]);

  async function cargarPublicaciones() {
    const data = await fetch("http://localhost:4000/publicaciones");
    const res = await data.json();
    setPublicaciones(res);
  }

  function cargarCards() {
    const lista = publicaciones.map((element) => {
      return (
        <label
          onClick={() => navigate(`/publicaciones/${element._id}`)}
          htmlFor={element._id}
          key={`${element._id}`}
        >
          <Card
            id={element._id}
            titulo={element.titulo}
            contenido={element.contenido}
            autor={element.autor._id}
            categorias={element.categorias}
          ></Card>
        </label>
      );
    });
    return lista;
  }

  useEffect(() => {
    cargarPublicaciones();
  }, []);

  return (
    <div>
      <h1>Publicaciones</h1>
      <div>{cargarCards()}</div>
      <button onClick={() => navigate("/publicaciones/crear")}>
        Crear publicacion
      </button>
    </div>
  );
}

export default Publicaciones;
