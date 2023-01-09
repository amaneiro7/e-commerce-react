import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import { AddButton, RemoveButton } from "./Buttons";
import "./ListProducts.scss";

export function ListProducts({ product }) {
  const { cartProduct } = useContext(TodoContext);
  const toggleButon = (cartProduct.some((item) => item.id === product.id))  

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
  
          {!toggleButon && <AddButton product={product}/>}
          {toggleButon && <RemoveButton product={product} />}

        </div>
      </div>
    </>
  );
};
