// import reactLogo from "./assets/react.svg";
import "./App.css";
import viteLogo from "/vite.svg";
import { useState } from "react";

import Navbar from "./componentes/Navbar";
import Card from "./componentes/Card";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div class="contenedor">
        <nav>
          <h1>Navengacion</h1>
        </nav>
        <main>
          <Card></Card>
        </main>
        <aside>
          <h1>Publicidad</h1>
        </aside>
      </div>
      <footer>
        <h1>Pie de pagina</h1>
      </footer>
    </>
  );
}

export default App;
