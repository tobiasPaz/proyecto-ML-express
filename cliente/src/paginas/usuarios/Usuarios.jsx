import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([{}]);

  async function cargarUsuarios() {
    const respons = await fetch("http://localhost:4000/usuarios");
    const data = await respons.json();
    setUsuarios(data);
  }

  function cargarTabla(array) {
    const lista = array.map((element) => {
      return (
        <tr key={`${element._id}`}>
          <td>{element.nombre}</td>
          <td>{element.apellido}</td>
          <td>{element.email}</td>
          <td>
            <button>
              <Link to={`/usuarios/${element._id}`}>Inf</Link>
            </button>
          </td>
        </tr>
      );
    });
    return lista;
  }

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>apellido</th>
            <th>email</th>
            <th>aplicaciones</th>
          </tr>
        </thead>
        <tbody id="tbody">{cargarTabla(usuarios)}</tbody>
      </table>
    </div>
  );
}

export default Usuarios;
