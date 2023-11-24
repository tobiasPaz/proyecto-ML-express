import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Categorias() {
  const navigate = useNavigate();
  const [categorias, setUsuarios] = useState([{}]);

  async function cargarCategorias() {
    const respons = await fetch("http://localhost:4000/categorias");
    const data = await respons.json();
    setUsuarios(data);
  }

  function cargarTabla(array) {
    const lista = array.map((element) => {
      return (
        <tr key={`${element._id}`}>
          <td>{element.nombre}</td>
          <td>
            <button>
              <Link to={`/categorias/${element._id}`}>Inf</Link>
            </button>
          </td>
        </tr>
      );
    });
    return lista;
  }

  useEffect(() => {
    cargarCategorias();
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>aplicaciones</th>
          </tr>
        </thead>
        <tbody id="tbody">{cargarTabla(categorias)}</tbody>
      </table>
      <button
        onClick={() => {
          navigate("/categorias/crear");
        }}
      >
        Crear Categoria
      </button>
    </div>
  );
}

export default Categorias;
