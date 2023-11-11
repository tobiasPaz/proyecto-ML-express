// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Boton from "./componentes/Boton";
import { useState } from "react";
import Form from "./componentes/Form";

function App() {
  const [numero, setNumero] = useState(0);

  function contador() {
    setNumero(numero + 1);
  }

  return (
    <>
      <Form></Form>
      {/* <Boton
        texto={numero}
        color="red"
        colorLetra="white"
        funcion={contador}
      ></Boton> */}
    </>
  );
}

export default App;
