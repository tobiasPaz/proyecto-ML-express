import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([{}]);
  const navigate = useNavigate();

  async function cragarUsuarios() {
    const respons = await fetch("http://localhost:4000/usuarios");
    const data = await respons.json();
    setUsuarios(data);
    console.log(data);
  }

  useEffect(() => {
    cragarUsuarios();
    console.log(usuarios);
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
    </div>
  );
}

export default Usuarios;
