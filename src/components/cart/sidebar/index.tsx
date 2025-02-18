import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../../../contexts/CartContext.tsx";
import {NavLink} from "react-router-dom";
import {Card} from "./card.tsx";
import {maskMoney} from "../../../helpers/maskMoney.ts";

export function CartSidebar() {
    const [showError, setShowError] = useState(false)

    const navigate = useNavigate()

    const cartContext = useContext(CartContext)

    const handleCheckout = () => {
        cartContext.cartIsValid() ? navigate('/checkout') : setShowError(true)
    }

    return (
        <>
            {showError && (
                <div className="w-full bg-base-card">
                    Preencha todos os campos para prosseguir
                </div>
            )}

            <h3 className="text-base-subtitle font-bold">Cafés selecionados</h3>

            <div className="rounded-tr-2xl rounded-bl-2xl bg-base-card py-4 px-6 mt-4 mb-6">
                {cartContext.cart.length > 0 && (
                    <>
                        <div className="divide-base-button divide-y">
                            {cartContext.cart.map(product => (
                                <Card
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>

                        <nav className="pt-6 border-t border-base-button">
                            <ul className="space-y-3">
                                <li className="text-base-text flex items-center justify-between">
                                    <span>Total de itens</span>
                                    <span>{maskMoney(cartContext.cartSubTotal())}</span>
                                </li>
                                <li className="text-base-text flex items-center justify-between">
                                    <span>Entrega</span>
                                    <span>{maskMoney(cartContext.shipment)}</span>
                                </li>
                                <li
                                    className="text-base-subtitle font-extrabold text-2xl flex items-center
                                    justify-between"
                                >
                                    <span>Total</span>
                                    <span>{maskMoney(cartContext.cartTotal())}</span>
                                </li>
                            </ul>
                        </nav>

                        <button
                            onClick={handleCheckout}
                            className="bg-yellow text-white rounded-md mt-6 py-3 px-6 transition-all
                            duration-300 not:disabled:hover:bg-yellow-dark w-full block text-center disabled:opacity-50
                            disabled:hover:bg-yellow"
                            disabled={!cartContext.cartIsValid()}
                        >
                            CONFIRMAR PEDIDO
                        </button>

                        <div className="w-full text-center mt-3">
                            <NavLink to="/" className="text-base-label inline-block hover:underline">
                                Continuar comprando
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
