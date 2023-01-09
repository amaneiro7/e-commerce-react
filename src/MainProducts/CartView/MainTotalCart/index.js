import React, { useContext } from "react";
import { TodoContext } from "../../../hooks";

export function MainTotalCart() {
    const {cartProduct} = useContext(TodoContext)
    const {cart} = cartProduct    

    const sumTotal = () => {                             
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className="main__container__cart--actions">
        <div className="main__container__cart--left-actions">
            <button className="main__container__cart--btn-empty" type="button">
                Vaciar Carrito
            </button>
        </div>
        <div className="main__container__cart--right-actions">
            <div className="main__container__cart--total-actions">
                <p>Total:</p>
                <p id="Total">${sumTotal()}</p>
            </div>
            <button className="main__container__cart--btn-buy-actions" type="button">
                Comprar Ahora
            </button>
        </div>
    </div>
    );
};