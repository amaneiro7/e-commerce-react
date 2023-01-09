import { useEffect, useState } from "react";

export function useLocalStorage(itenName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itenName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itenName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);                
            } catch (error) {
                setError(error);
            }
        }, 80);
    }, [itenName, initialValue, item]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itenName, JSON.stringify(newItem));
            setItem(item);
        } catch (error) {
            setError(error);
        }
    };
    return {
        saveItem,
        item,
        error
    };
}
