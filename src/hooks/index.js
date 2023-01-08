import React, { createContext, useState } from "react";
import { useGetProducts } from "./useGetProducts";
import { useGetCategories } from "./useGetCategories";

export const TodoContext = createContext();

export function TodoProvider(props) {
    const [endPoint, setEndpoint] = useState('/Products');
    const [title, setTitle] = useState('Todos los Productos');
    const {products, loading, error} = useGetProducts(endPoint);   
    const {categories, loadingCat}  = useGetCategories();
    const [categorySelected, setCategorySelected] = useState('Todos los productos')


    const onChangeCategory = (event) => {
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

    return (
        <TodoContext.Provider value={{
            products,
            title,
            categories,
            loading,
            loadingCat,
            error,
            onChangeCategory,
            categorySelected
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};