import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function EditarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoria, setCategoria] = useState({
    nombre: "",
  });

  async function CargarCategoria() {
    const respons = await fetch(`http://localhost:4000/categorias/${id}`);
    const data = await respons.json();
    setCategoria(data);
  }

  function handleChange(e) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    fetch(`http://localhost:4000/categorias/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        nombre: categoria.nombre,
      }),
    });
    console.log("enviado", categoria);
  }

  useEffect(() => {
    CargarCategoria();
  }, []);

  return (
    <div>
      <h1>Editar Categoria</h1>
      <div>
        <label htmlFor="nombre">
          Nombre:
          <input
            value={categoria.nombre}
            onChange={handleChange}
            type="text"
            name="nombre"
            id="nombre"
          />
        </label>
        <br />
        <button
          onClick={() => {
            handleSubmit();
            navigate("/categorias");
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default EditarCategoria;
