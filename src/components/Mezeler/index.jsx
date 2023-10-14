import axios from "axios";
import { useEffect, useState } from "react";

const Mezeler = () => {
  const [mezelerData, setMezelerData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2030/mezeler")
      .then((res) => setMezelerData(res.data));
  }, []);

  function handleChange(e, meze) {
    e.target.checked
      ? setBasket([...basket, meze])
      : setBasket(basket.filter((basket) => basket.name !== meze.name));
  }
  return (
    <div className="container mt-5">
      <h1>Meze Çeşitleri</h1>
      <p className="lead">Eşsiz Meze Lezzet Tabağı: 90 &#8378; </p>

      <div className="row gap-3 mt-4 d-flex align-items-center justify-content-evenly">
        {mezelerData.map((meze, i) => {
          return (
            <div
              key={i}
              className="d-flex flex-column align-items-center shadow rounded-1"
              style={{ width: "160px" }}
            >
              <img
                src={meze.imagePath}
                alt=""
                className="img-fluid rounded-circle"
              />
              <label className="text-nowrap" htmlFor={meze.name}>
                {meze.name}
              </label>
              <input
                type="checkbox"
                onChange={(e) => handleChange(e, meze)}
                className="form-check-input mb-2"
                id={meze.name}
              />
            </div>
          );
        })}
      </div>
      <h5 className="mt-3">Meze Tabağı Ücreti :{basket.length * 90}&#8378;</h5>
    </div>
  );
};

export default Mezeler;
