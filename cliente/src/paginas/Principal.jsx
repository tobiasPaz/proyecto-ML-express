import Card from "../componentes/Card";
import { useLocation } from "react-router-dom";

function Principal() {
  const { state } = useLocation();

  return (
    <div>
      <div className="contenedor">
        <nav>
          <h1>Navengacion</h1>
        </nav>
        {state ? (
          <h2 style={{ color: "white", backgroundColor: "red" }}>
            {state.alert}
          </h2>
        ) : null}
        <main>
          <h1>inicio</h1>
        </main>
        <aside>
          <h1>Publicidad</h1>
        </aside>
      </div>
      <footer>
        <h1>Pie de pagina</h1>
      </footer>
    </div>
  );
}

export default Principal;
