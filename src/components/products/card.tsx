import {ShoppingCart} from "phosphor-react";
import {Badge} from "../ui/badge.tsx";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";
import {Product} from "./index.tsx";
import {maskMoney} from "../../helpers/maskMoney.ts";
import {Quantity} from "./quantity.tsx";

interface CardProps {
    product: Product
}

export function Card({  product }: CardProps) {
    const cartContext = useContext(CartContext)

    return (
        <article
            className="bg-base-card rounded-md rounded-tr-[60px] rounded-bl-[60px] p-4 flex flex-col gap-3 relative"
        >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img src={`/public/images/${product.image}`} alt=""/>
            </div>
            <div className="mt-20 flex items-center justify-center gap-1">
                {product.categories.map(category => (
                    <Badge key={`category_${category}`}>{category}</Badge>
                ))}
            </div>
            <header className="text-center mt-4">
                <h1 className="text-base-title font-bold font-roboto">
                    {product.name}
                </h1>
                <p className="mt-2 text-base-subtitle text-sm">
                    {product.description}
                </p>
            </header>

            <footer className="py-6 px-2">
                <div className="flex items-center flex-col justify-between gap-4">
                    <div>
                        <span className="text-base-text font-bold text-2xl">
                            {maskMoney(product.price)}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Quantity product={product} />
                        <button
                            className="bg-purple-dark rounded-md p-3 shopping-cart"
                            onClick={() => cartContext.addItemToCart(product)}
                        >
                            <ShoppingCart size={18} color="white" />
                        </button>
                    </div>
                </div>
            </footer>
        </article>
    )
}
