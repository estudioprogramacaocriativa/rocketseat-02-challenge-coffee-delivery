import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";
import {Minus, Plus} from "phosphor-react";
import {Product} from "./index.tsx";

interface QuantityProps {
    product: Product
}

export function Quantity({ product }: QuantityProps) {
    const cartContext = useContext(CartContext)

    return (
        <div className="flex items-center bg-base-button rounded-md p-2.5">
            <button onClick={() => cartContext.decreaseQuantity(product)}>
                <Minus size={8}/>
            </button>
            <input
                type="number"
                className="w-full bg-transparent text-center font-roboto font-bold text-base-title
                focus:outline-0 focus:ring-0 focus:appearance-none"
                placeholder="1"
                min="1"
                value={cartContext.getQuantity(product)}
                onChange={() => cartContext.updateQuantity(product)}
            />
            <button onClick={() => cartContext.increaseQuantity(product)}>
                <Plus size={8}/>
            </button>
        </div>
    )
}
