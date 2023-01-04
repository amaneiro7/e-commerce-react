import React from "react";
import './Style/Nav.scss'

export function Nav() {
  return (
    <nav>
      <ul className="nav__menu">
        <li>
          <button className="btn--menu btn--category active">
            <i className="bi bi-hand-index-thumb-fill" />
            Todos los productos
          </button>
        </li>
        <li>
          <button className="btn--menu btn--category">
            <i className="bi bi-hand-index-thumb" />
            Abrigos
          </button>
        </li>
        <li>
          <button className="btn--menu btn--category">
            <i className="bi bi-hand-index-thumb" />
            Camisetas
          </button>
        </li>
        <li>
          <button className="btn--menu btn--category">
            <i className="bi bi-hand-index-thumb" />
            Pantalones
          </button>
        </li>
        <li>
          <a className="btn--menu btn--cart" href="./carrito.html">
            <i className="bi bi-cart-fill" />
            Carrito <span className="numerito">0</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
