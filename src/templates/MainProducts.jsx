import React from "react";
import { ListProducts } from '../components/ListProducts';
import './style/MainProducts.scss'

export function MainProducts() {
  return (
    <main className="main">
      <h2 className="main__title">Todos los Productos</h2>
      <div className="main__container"></div>
      <ListProducts />
    </main>
  );
}
