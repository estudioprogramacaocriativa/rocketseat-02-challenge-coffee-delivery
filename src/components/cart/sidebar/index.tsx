import {useContext} from "react";
import {CartContext} from "../../../contexts/CartContext.tsx";
import EmptyCart from '../../../assets/empty-cart.png'
import {NavLink} from "react-router-dom";

export function CartSidebar() {
    const cartContext = useContext(CartContext)

    return (
        <>
            <h3 className="text-base-subtitle font-bold">Cafés selecionados</h3>

            <div className="rounded-tr-2xl rounded-bl-2xl bg-base-card p-10 mt-4">


                {cartContext.cart.length === 0 && (
                    <div className="text-base-text mt-3 text-center py-20">
                        <img src={EmptyCart} alt="" className="w-full max-w-[200px] mx-auto" />
                        <p className="font-bold text-base-label">Seu carrinho está vazio!</p>

                        <NavLink
                            to="/"
                            className="inline-block mt-6 bg-base-label text-white rounded-md py-3 px-6 transition-all
                            duration-300 hover:bg-base-text"
                        >
                            Adicione itens
                        </NavLink>
                    </div>
                )}
            </div>
        </>
    )
}
