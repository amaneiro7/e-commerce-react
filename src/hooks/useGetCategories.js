import { useEffect, useState } from 'react';
const API = 'https://fakestoreapi.com/products/categories';

export function useGetCategories() {
    const [loadingCat, setLoadingCat] = useState(true);
    const [error, setError] = useState(false);
    
    const [categories, setCategories] = useState([]);    

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
                setLoadingCat(false)
            })
            .catch((error) =>
                setError(error))
    }, []);

    return {
        categories,
        loadingCat,
        error,
    };
};