import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

const Kebaps = () => {
  const [kebapsData, setKebapsData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:2030/kebaps")
      .then((res) => setKebapsData(res.data));
  }, []);

  return (
    <div className="container-lg" style={{ marginTop: "110px" }}>
      <h1>Kebap Çeşitleri</h1>
      <p className="lead fs-4">Efsane Lezzetler 225 &#8378; </p>

      <div className="row gap-3 justify-content-center align-items-center">
        {kebapsData.map((kebap, i) => (
          <Card key={i} kebap={kebap} setBasket={setBasket} basket={basket} />
        ))}
      </div>
      <h5 className="pb-3 border-bottom mt-4">
        Kebap Menü Toplamı :{basket.length * 225}&#8378;
      </h5>
    </div>
  );
};

export default Kebaps;
