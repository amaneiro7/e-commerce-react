import React, { useContext } from "react";
import { ListProducts } from './ListProducts';
import './MainProducts.scss'
import { TodoContext } from "../hooks";
import { Loading } from "../Loading"
import { CartView } from "./CartView";

export function MainProducts() {
  const {
    products,
    title,
    loading,
    error,
    cartView,
  } = useContext(TodoContext);

  //La cantidad de cards que apareceran en el tiempo de carga
  const loadCard = 3;


  return (
    <main className="main">
      <h2 className="main__title">{title}</h2>
      {!cartView &&
        <div className="main__container">
          {loading && Array.from({ length: loadCard }, (_, i) =>
            <Loading key={i} />)}
          {(!loading && !error) &&
            products.map((product) => (
              <ListProducts 
                key={product.id} 
                product={product} 
              />
            ))}
        </div>}
      {(!loading && !error && cartView) && <CartView />}
    </main>
  );
}
