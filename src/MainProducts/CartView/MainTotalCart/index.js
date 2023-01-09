import React, { useContext } from "react";
import { TodoContext } from "../../../hooks";

export function MainTotalCart() {
    const {cartProduct, removeAllFromCart} = useContext(TodoContext)       

    const sumTotal = () => {                             
        const reducer = (accumalator, currentValue) => accumalator + (currentValue.price * currentValue.quantity);
        const sum = (cartProduct.reduce(reducer, 0)).toFixed(2);
        return sum;
    };

    return (
        <div className="main__container__cart--actions">
        <div className="main__container__cart--left-actions">
            {(cartProduct.length !== 0) &&<button className="main__container__cart--btn-empty" type="button"
                onClick={() => removeAllFromCart()}
            >
                Vaciar Carrito
            </button>}
        </div>
        <div className="main__container__cart--right-actions">
            <div className="main__container__cart--total-actions">                
                <p id="Total">Total: ${sumTotal()}</p>
            </div>
            <button className="main__container__cart--btn-buy-actions" type="button" disabled={cartProduct.length === 0}>
                Comprar Ahora
            </button>
        </div>
    </div>
    );
};