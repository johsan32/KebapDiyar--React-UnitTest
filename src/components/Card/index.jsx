const Card = ({ kebap, basket, setBasket }) => {
  const { imagePath, name } = kebap;
  const found = basket?.filter((item) => item.name === name);
  const amount = found.length;

  const handleReset = () => {
    const clearBasket = basket.filter((item) => item.name !== name);
    setBasket(clearBasket);
  };

  return (
    <div
      style={{ width: "250px" }}
      className="d-flex flex-column align-items-center shadow rounded-2"
    >
      <img
        alt="çeşit"
        src={imagePath}
        className="img-fluid rounded-3 mt-1 shadow"
      />
      <label className="lead">{name}</label>

      <div className="d-flex gap-3 align-items-center my-2">
        <button className="btn btn-danger" onClick={() => handleReset()}>
          Kaldır
        </button>
        <span className="fs-4">{amount}</span>
        <button
          className="btn btn-primary"
          onClick={() => setBasket([...basket, kebap])}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
