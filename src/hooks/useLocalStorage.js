import { useEffect, useState } from "react";

export function useLocalStorage(itenName, initialValue) {    
    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState(false)      
    const [getSync, setGetSync] = useState(true)

    useEffect(() => {                
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
                setGetSync(true);
            } catch (error) {
                setError(error);
            }        
        }, [getSync]);
        
        const saveItem = (newItem) => {
            setGetSync(false);        
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
        error,        
    };
}
