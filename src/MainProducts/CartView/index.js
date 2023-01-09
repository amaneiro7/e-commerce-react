import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import { BoughtMessage } from "./BoughtMessage";
import { EmptyCart } from "./EmptyCart";
import { MainCartProducts } from "./MainCartProducts";
import { MainTotalCart } from "./MainTotalCart";
import "./cartView.scss";

export function CartView() {
    const {cartProduct} = useContext(TodoContext);
    const {cart} = cartProduct;
    
    return (
        <div className="main__container__cart">
            {cart.length === 0 && <EmptyCart/>}
            {cart.length !== 0 && 
                cart.map((product) => (
                    <MainCartProducts
                        key={product.id}
                        product={product}
                    />))}
            <MainTotalCart/>
            {cart.length !== 0 && <BoughtMessage/>}
        </div>
    );
};
