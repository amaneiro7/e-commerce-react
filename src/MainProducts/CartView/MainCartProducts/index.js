import React, { useContext, useState } from "react";
import { TodoContext } from "../../../hooks";
import "./MainCartProducts.scss"

export function MainCartProducts({product}) {
    const {removeFromCart} = useContext(TodoContext);
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            <div className="main__container__cart--products">
                <div className="main__container__cart--product">
                    <img className="main__container__cart--image" src={product.image} alt={product.title} />
                    <div className="main__container__cart--title">
                        <small>Titulo</small>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="main__container__cart--quantity">
                        <small>Cantidad</small>
                        <div>
                            <button
                                onClick={() => setQuantity(quantity -1)}
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            <h3>{quantity}</h3>
                            <button
                                onClick={() => setQuantity(quantity +1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="main__container__cart--price">
                        <small>Precio</small>
                        <h3>${product.price}</h3>
                    </div>
                    <div className="main__container__cart--subtotal">
                        <small>Subtotal</small>
                        <h3>${(quantity*product.price).toFixed(2)}</h3>
                    </div>
                    <button className="main__container__cart--delete" type="button"
                        onClick={() => removeFromCart(product)}    
                    >
                        <i className="bi bi-trash-fill" />
                    </button>
                </div>
            </div>
        </>
    );
};