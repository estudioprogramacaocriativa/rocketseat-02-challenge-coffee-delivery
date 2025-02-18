import {maskMoney} from "../../../helpers/maskMoney.ts";
import {Product} from "../../products";
import {Quantity} from "../../products/quantity.tsx";
import {Remove} from "../../products/remove.tsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/CartContext.tsx";

interface CardProps {
    product: Product
}

export function Card({  product }: CardProps) {
    const cartContext = useContext(CartContext)

    return (
        <article
            className="bg-base-card p-4 flex items-start justify-between gap-3"
        >
            <div>
                <img src={`/public/images/${product.image}`} alt={product.name} className="w-full max-w-[70px]" />
            </div>
            <header>
                <h1 className="text-base-title">
                    {product.name}
                </h1>
                <div className="mt-2 flex items-center gap-2">
                    <Quantity product={product}/>
                    <Remove product={product} />
                </div>
            </header>

            <div>
                <span className="text-base-text font-bold text-sm">
                    {maskMoney(cartContext.itemTotal(product))}
                </span>
            </div>
        </article>
    )
}
