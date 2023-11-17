
import Card from "../componentes/Card";

function Principal() {
  return (
    <div>
      <div className="contenedor">
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
    </div>
  );
}

export default Principal;
