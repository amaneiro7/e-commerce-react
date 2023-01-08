import React, { useContext } from "react";
import { ListProducts } from './ListProducts';
import './MainProducts.scss'
import { TodoContext } from "../hooks";
import { Loading } from "../Loading"

export function MainProducts() {
  const {
    products,
    title,
    loading,
    error,
  } = useContext(TodoContext)
  
  
  return (
    <main className="main">
      <h2 className="main__title">{title}</h2>
      <div className="main__container">
        {loading && Array.from({length:9},(_, i) => 
        <Loading key={i}/>)}
        {(!loading && !error) &&
          products.map((product) => (
          <ListProducts product={product} key={product.id}/>
        ))}
      </div>
    </main>
  );
}
