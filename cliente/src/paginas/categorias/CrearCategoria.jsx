import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CrearCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState({
    nombre: "",
  });

  function handleChange(e) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    fetch("http://localhost:4000/categorias", {
      method: "POST",
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
  return (
    <div>
      <h1>Crear Categoria</h1>
      <div>
        <label htmlFor="nombre">
          Nombre:
          <input
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

export default CrearCategoria;
