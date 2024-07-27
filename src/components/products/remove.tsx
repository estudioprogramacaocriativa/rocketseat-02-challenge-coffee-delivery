import {Product} from "./index.tsx";
import {CartContext} from "../../contexts/CartContext.tsx";
import {useContext} from "react";

import trash from '../../assets/trash.svg'

interface QuantityProps {
    product: Product
}

export function Remove({ product }: QuantityProps) {
    const cartContext = useContext(CartContext)

    return (
        <button
            type="button"
            className="bg-base-button hover:bg-base-hover rounded-md text-base-text transition-colors
            flex gap-1 items-center py-2 px-3 w-full justify-center"
            onClick={() => cartContext.removeItemFromCart(product)}
        >
            <img src={trash} alt=""/>
            Remover
        </button>
    )
}
