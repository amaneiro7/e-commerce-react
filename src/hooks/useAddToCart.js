import { useLocalStorage } from "./useLocalStorage";

export const useAddToCart = () => {    
    const {
        item: cartProduct,
        saveItem: saveCartProduct        
    } = useLocalStorage('CurrentCart', [])

    const addToCart = (payload) => {
        payload.quantity = 1;
        payload.selected = true;
        const newAddToCart = [...cartProduct];
        newAddToCart.push(payload);
        saveCartProduct(newAddToCart);
    };
    
    const removeFromCart = (payload) => {
        const removeProduct = cartProduct.filter((items) => items.id !== payload.id);
        saveCartProduct(removeProduct);
    };

    const removeAllFromCart = () => {        
        saveCartProduct([]);
    };

    const sumQuantityProduct = (payload) => {
        const index = cartProduct.findIndex((items) => items.id === payload.id);
        const productQuantity = [...cartProduct];
        productQuantity[index].quantity++        
        saveCartProduct(productQuantity);
    };
    
    const resQuantityProduct = (payload) => {
        const index = cartProduct.findIndex((items) => items.id === payload.id);
        const productQuantity = [...cartProduct];
        productQuantity[index].quantity--        
        saveCartProduct(productQuantity);
    };


    return {
        cartProduct,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        sumQuantityProduct,
        resQuantityProduct,
    };
};

