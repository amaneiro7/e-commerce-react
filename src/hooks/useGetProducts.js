import { useEffect, useState } from 'react';

export function useGetProducts(endPoint) {
    const API = 'https://fakestoreapi.com';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);    
    
    useEffect(() => {
        const apiUrl = `${API}${endPoint}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((error) =>
                setError(error))
    }, [endPoint]);

    return {
        products,
        loading,
        error,
    };
};