import { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = 'https://fakestoreapi.com/products'

const useGetProducts = (apiUrl) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios(apiUrl);
            setProducts(response.data);
        })();
    }, []);

    return products;
};

export default useGetProducts;