import Dollar from "../../../assets/dollar.svg";
import CreditCard from "../../../assets/credit-card.svg";
import Bank from "../../../assets/bank.svg";
import Money from "../../../assets/money.svg";
import {useContext} from "react";
import {CartContext} from "../../../contexts/CartContext.tsx";

export function Payment() {
    const cartContext = useContext(CartContext)

    return (
        <div className="bg-base-card p-5 sm:p-10 mt-3 rounded-md">
            <header className="flex items-start gap-3">
                <img src={Dollar} alt=""/>
                <div>
                    <h3 className="text-base-subtitle -mt-1">
                        Pagamento
                    </h3>
                    <p className="text-base-text text-xs sm:text-sm">
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </p>
                </div>
            </header>

            <div className="grid sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3 gap-3 mt-8">
                <div
                    className={`flex items-center justify-center bg-base-button rounded-md border gap-4 p-4
                    transition-all duration-300 cursor-pointer ${(cartContext.paymentMethod === "credit-card") ? "bg-purple-light border-purple-dark" : "hover:bg-base-hover"}`}
                    onClick={() => cartContext.handlePaymentMethod("credit-card")}
                >
                    <img src={CreditCard} alt=""/>
                    <span className="text-base-text uppercase text-xs">Cartão de crédito</span>
                </div>
                <div
                    className={`flex items-center justify-center bg-base-button rounded-md border gap-4 p-4
                    transition-all duration-300 cursor-pointer ${(cartContext.paymentMethod === "debit-card") ? "bg-purple-light border-purple-dark" : "hover:bg-base-hover"}`}
                    onClick={() => cartContext.handlePaymentMethod("debit-card")}
                >
                    <img src={Bank} alt=""/>
                    <span className="text-base-text uppercase text-xs">Cartão de débito</span>
                </div>
                <div
                    className={`flex items-center justify-center bg-base-button rounded-md border gap-4 p-4
                    transition-all duration-300 cursor-pointer ${(cartContext.paymentMethod === "money") ? "bg-purple-light border-purple-dark" : "hover:bg-base-hover"}`}
                    onClick={() => cartContext.handlePaymentMethod("money")}
                >
                    <img src={Money} alt=""/>
                    <span className="text-base-text uppercase text-xs">Dinheiro</span>
                </div>
            </div>
        </div>
    )
}
