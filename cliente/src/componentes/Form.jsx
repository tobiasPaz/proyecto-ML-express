import { useState } from "react";
import Boton from "./Boton";

function Form(props) {
  const [nombre, setnombre] = useState(0);

  const handlenombre = (event) => {
    setnombre(event.target.value);
  };

  const handleBoton = () => {
    console.log(nombre);
  };

  return (
    <div>
      <label htmlFor="name">
        Name
        <input type="text" id="name" value={nombre} onChange={handlenombre} />
      </label>
      <Boton
        texto="enviar"
        color="green"
        colorLetra="white"
        funcion={handleBoton}
      ></Boton>
    </div>
  );
}

export default Form;
