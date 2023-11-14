function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        <a href="#" className="btn btn-primary">
          other button
        </a>
      </div>
    </div>
  );
}

export default Card;
