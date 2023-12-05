import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Categoria() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoria, setCategoria] = useState({
    nombre: "",
    publicaciones: [{ titulo: "" }],
  });

  async function CargarCategoria() {
    const respons = await fetch(`http://localhost:4000/categorias/${id}`);
    const data = await respons.json();
    setCategoria(data);
  }

  function cargarPublicaciones(e) {
    const list = e.map((element) => {
      return (
        <div key={`${element._id}`}>
          <p>{element.titulo}</p>
        </div>
      );
    });
    return list;
  }

  useEffect(() => {
    CargarCategoria();
  }, []);

  return (
    <div>
      <h1>Categoria</h1>
      <h2>Nombre: {categoria.nombre}</h2>
      <h2>Publicaciones: {cargarPublicaciones(categoria.publicaciones)}</h2>
      <button onClick={() => navigate(`/categorias/editar/${id}`)}>
        editar
      </button>
      <button
        onClick={() => {
          fetch(`http://localhost:4000/categorias/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          navigate("/categorias");
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Categoria;
