import React, {useContext} from "react";
import { TodoContext } from "../../../hooks";
import "./Buttons.scss"

export function AddButton(props) {
    const { product } = props
    const { addToCart } = useContext(TodoContext);    
    
    return (
        <button className="main__container__list--add" type="button"
            onClick={() => addToCart(product)}
        >
            Agregar
        </button>
    );
};

export function RemoveButton(props) {
    const { product } = props
    const { removeFromCart } = useContext(TodoContext);
    
    return (
        <button className="main__container__list--add remove" type="button"
            onClick={() => removeFromCart(product)}
        >
            Remover
        </button>
    );
};