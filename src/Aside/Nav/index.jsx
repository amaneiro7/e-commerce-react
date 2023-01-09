import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import { CategoryList } from "../categoryList"
import './Nav.scss'

export function Nav() {  
  const {
    categories,
    categorySelected,     
    onChangeCategory,
    cartView,
    setCartView,
    cartProduct
  } = useContext(TodoContext);  
  
  return (
    <nav>
      <ul className="nav__menu">
        {!cartView && <li>
          <button className={`btn--menu btn--category ${categorySelected === 'Todos los productos' && 'active'}`} onClick={onChangeCategory}>
            <i className="bi bi-hand-index-thumb-fill" />
            Todos los productos
          </button>
        </li>}
        {cartView &&<li>
          <button className="btn--menu btn--back"
            onClick={() => setCartView(false)}
          >
              <i className="bi bi-arrow-return-left"></i>
              Seguir comprando</button>
        </li>}
        {(!cartView) && categories.map((category) => (<CategoryList key={category} category={category} />
        ))}
        <li>
          <button className="btn--menu btn--cart" type="button"
          onClick={() => setCartView(true)}
          >
            <i className="bi bi-cart-fill" />
            Carrito <span className="numerito">{cartProduct.cart.length}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
