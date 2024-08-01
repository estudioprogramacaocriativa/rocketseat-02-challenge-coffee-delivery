import {CartSidebar} from "../components/cart/sidebar";
import EmptyCart from "../assets/empty-cart.png";
import {NavLink} from "react-router-dom";
import {CartContext} from "../contexts/CartContext.tsx";
import {useContext} from "react";
import {Payment} from "../components/cart/sidebar/payment.tsx";

import PinIcon from '../assets/pin.svg'
import {Address} from "../components/cart/sidebar/address.tsx";

export function Cart() {
    const cartContext = useContext(CartContext)

    return (
        <div className="mt-28 max-w-6xl mx-auto px-5 lg:px-0">
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

            {cartContext.cart.length > 0 && (
                <div className="grid lg:grid-cols-5 gap-6">
                    <article className="lg:col-span-3">
                        <p className="text-base-subtitle font-bold">Complete seu pedido</p>

                        <div className="bg-base-card p-5 sm:p-10 mt-4 rounded-md">
                            <header className="flex items-start gap-3">
                                <img src={PinIcon} alt=""/>
                                <div>
                                    <h3 className="text-base-subtitle -mt-1">
                                        Endereço de entrega
                                    </h3>
                                    <p className="text-base-text text-xs sm:text-sm">
                                        Informe o endereço onde deseja receber seu pedido
                                    </p>
                                </div>
                            </header>

                            <Address />
                        </div>

                        <Payment />
                    </article>
                    <article className="lg:col-span-2">
                        <CartSidebar />
                    </article>
                </div>
            )}
        </div>
    )
}
