function Card({ titulo, contenido, autor, categorias }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{contenido}</p>
      </div>
    </div>
  );
}

export default Card;
