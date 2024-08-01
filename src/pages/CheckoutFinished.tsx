import checkoutImage from '../assets/order-done.svg'
import pin from '../assets/pin-white.svg'
import clock from '../assets/clock.svg'
import dollar from '../assets/dollar-white.svg'
import {useContext, useEffect} from "react";
import {CartContext} from "../contexts/CartContext.tsx";
import {parsePaymentMethod} from "../helpers/parsePaymentMethod.ts";
import {useNavigate} from "react-router-dom";

export function CheckoutFinished() {
    const cartContext = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        !cartContext.cartIsValid() && navigate('/cart')
    })

    return (
        <div className="mt-36 max-w-6xl mx-auto px-5 lg:px-0">
            <section>
                <header>
                    <h1 className="text-yellow-dark font-bold font-baloo text-xl md:text-3xl">
                        Uhu! Pedido confirmado
                    </h1>
                    <p className="text-base-subtitle text-xs md:text-lg">
                        Agora e só aguardar que logo o café chega ate você.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-6 md:gap-20 mt-6">
                    <div
                        className="h-full w-full rounded-md bg-gradient-to-r from-background via-base-text to-yellow
                        rounded-tr-2xl rounded-bl-2xl border"
                    >
                        <div className="h-full w-full bg-white rounded-md p-10 space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple">
                                    <img className="w-4 h-4 text-white" src={pin} alt="Endereço de entrega"/>
                                </div>
                                <div className="text-base-text text-base">
                                    <p>Entregar para <span className="font-bold">{cartContext.address.name}</span></p>
                                    <p>Entrega em <span className="font-bold">{cartContext.address.street}, {cartContext.address.number}</span></p>
                                    <p>{cartContext.address.neighborhood} - {cartContext.address.city}, {cartContext.address.state}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
                                    <img className="w-4 h-4 text-white" src={clock} alt="Previsão de entrega"/>
                                </div>
                                <div className="text-base-text text-base">
                                    <p>Previsão de entrega</p>
                                    <p className="font-bold">20 min - 30 min </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-dark">
                                    <img
                                        className="w-4 h-4 text-white"
                                        src={dollar} alt="Pagamento via cartão de crédito"
                                    />
                                </div>
                                <div className="text-base-text text-base">
                                    <p>Pagamento na entrega</p>
                                    <p className="font-bold">
                                        {parsePaymentMethod(cartContext.paymentMethod)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={checkoutImage} alt="" className="w-full"/>
                    </div>
                </div>
            </section>
        </div>
    )
}
