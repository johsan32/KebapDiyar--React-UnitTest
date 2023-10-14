import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-4">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />

      <div className="terms">
        <p
          className="bg-light text-black p-2 rounded shadow"
          style={{ visibility: isHover ? "visible" : "hidden" }}
        >
          Kısa sürede menünüz masanıza gelecektir.
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className={`btn ${isChecked ? "btn-success" : "btn-warning"}`}
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
