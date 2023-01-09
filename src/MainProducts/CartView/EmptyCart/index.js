import React from "react";
import "./EmptyCart.scss";

export function EmptyCart() {
    return (
        <>
            <p className="carrito-vacio">
                Tu carrito esta vacio
                <i className="bi bi-emoji-frown" />
            </p>
        </>
    );
};