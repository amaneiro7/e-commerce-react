import {useState} from "react";

const initialState = {
    cart: [],
}

export const useAddToCart = () => {
    const [cartProduct, setCartProduct] = useState(initialState);

    const addToCart = (payload) => {
        setCartProduct({
            ...cartProduct,
            cart: [...cartProduct.cart, payload],
        });
    };
    
    const removeFromCart = (payload) => {
        setCartProduct({
            ...cartProduct,
            cart: cartProduct.cart.filter((items) => items.id !== payload.id)
        });
    };

    return {
        cartProduct,
        addToCart,
        removeFromCart,
    };
};
