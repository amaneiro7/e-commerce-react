import React from "react";
import "./Style/ListProducts.scss";

export function ListProducts() {
  return (
    <div className="main__container__list">
      <img
        className="main__container__list--image"
        src="./img/abrigos/01.jpg"
        alt="Abrigo"
      />
      <div className="main__container__list--details">
        <h3 className="main__container__list--title">Abrigo 01</h3>
        <p className="main__container__list--price">$1000</p>
        <button className="main__container__list--add" type="button">
          Agregar
        </button>
      </div>
    </div>
  );
};
