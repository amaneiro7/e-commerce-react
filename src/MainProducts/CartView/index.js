import React, { useContext } from "react";
import { TodoContext } from "../../hooks";
import { BoughtMessage } from "./BoughtMessage";
import { EmptyCart } from "./EmptyCart";
import { MainCartProducts } from "./MainCartProducts";
import { MainTotalCart } from "./MainTotalCart";
import "./cartView.scss";

export function CartView() {
    const {cartProduct} = useContext(TodoContext);
    
    
    return (
        <div className="main__container__cart">
            {cartProduct.length === 0 && <EmptyCart/>}
            {cartProduct.length !== 0 && 
                cartProduct.map((product) => (
                    <MainCartProducts
                        key={product.id}
                        product={product}
                    />))}
            <MainTotalCart/>
            {cartProduct.length !== 0 && <BoughtMessage/>}
        </div>
    );
};
