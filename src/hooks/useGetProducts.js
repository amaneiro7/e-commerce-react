import { useEffect, useState } from 'react';

export function useGetProducts(endPoint) {
    const API = 'https://fakestoreapi.com';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);    
    
    useEffect(() => {        
        setLoading(true)
        const apiUrl = `${API}${endPoint}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false)
                setProducts(data)
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