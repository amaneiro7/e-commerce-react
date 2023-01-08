import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import { CategoryList } from "../categoryList"
import './Nav.scss'

export function Nav() {  
  const {
    categories,
    categorySelected,     
    onChangeCategory
  } = useContext(TodoContext)
  
  return (
    <nav>
      <ul className="nav__menu">
        <li>
          <button className={`btn--menu btn--category ${categorySelected === 'Todos los productos' && 'active'}`} onClick={onChangeCategory}>
            <i className="bi bi-hand-index-thumb-fill" />
            Todos los productos
          </button>
        </li>
        {categories.map((category)=> (
          <CategoryList 
            key={category}
            category={category}                        
          />
        ))}
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
