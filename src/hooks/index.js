import React, { createContext, useState } from "react";
import { useGetProducts } from "./useGetProducts";
import { useGetCategories } from "./useGetCategories";
import { useAddToCart } from "./useAddToCart";

export const TodoContext = createContext();

export function TodoProvider(props) {
    const [endPoint, setEndpoint] = useState('/Products');
    const [title, setTitle] = useState('Todos los Productos');
    const {products, loading, error} = useGetProducts(endPoint);   
    const {categories, loadingCat}  = useGetCategories();
    const [categorySelected, setCategorySelected] = useState('Todos los productos');
    const [cartView, setCartView] = useState(false);
    const {cartProduct, addToCart, removeFromCart} = useAddToCart();



    const onChangeCategory = (event) => {
        setCartView(false)
        setTitle(event.target.textContent)
        if (event.target.textContent === 'Todos los productos') {
            setCategorySelected('Todos los productos');
            setEndpoint('/products');
        } else {
            const categoryEndpoint = event.target.textContent
            setCategorySelected(categoryEndpoint)
            setEndpoint(`/products/category/${categoryEndpoint}`);
        };
    };

    const onHandleCartView = () => {
        setCartView(true)
    }

    return (
        <TodoContext.Provider value={{
            products,
            title,
            categories,
            loading,
            loadingCat,
            error,
            categorySelected,
            cartView,
            cartProduct,
            addToCart,
            removeFromCart,
            setCartView,
            onChangeCategory,
            onHandleCartView,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};