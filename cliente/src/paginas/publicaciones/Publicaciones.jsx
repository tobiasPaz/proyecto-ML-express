import { useState, useEffect } from "react";
import Card from "../../componentes/Card";

function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);

  async function cargarPublicaciones() {
    const data = await fetch("http://localhost:4000/publicaciones");
    const res = await data.json();
    setPublicaciones(res);
  }

  function cargarCards() {
    const lista = publicaciones.map((element) => {
      return (
        <Card
          key={`${element._id}`}
          titulo={element.titulo}
          contenido={element.contenido}
          autor={element.autor}
          categorias={element.categorias}
        ></Card>
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
      <div>{cargarCards(publicaciones)}</div>
    </div>
  );
}

export default Publicaciones;
