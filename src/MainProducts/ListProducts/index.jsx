import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import "./ListProducts.scss";

export function ListProducts({ product }) {
  const { addToCart } = useContext(TodoContext);  
  
  return (
    <>
      <div className="main__container__list">
        <img
          className="main__container__list--image"
          src={product.image}
          alt={product.title}
        />
        <div className="main__container__list--details">
          <h3 className="main__container__list--title">{product.title}</h3>
          <p className="main__container__list--price">${product.price}</p>
          <button className="main__container__list--add" type="button"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
