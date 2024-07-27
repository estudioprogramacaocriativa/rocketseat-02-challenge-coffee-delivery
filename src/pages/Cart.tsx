import PinIcon from '../assets/pin.svg'
import Dollar from '../assets/dolar.svg'
import CreditCard from '../assets/credit-card.svg'
import Bank from '../assets/bank.svg'
import Money from '../assets/money.svg'

export function Cart() {
    return (
        <div className="mt-28 max-w-6xl mx-auto">
            <div className="grid grid-cols-5 gap-6">
                <article className="col-span-3">
                    <p className="text-base-subtitle font-bold">Complete seu pedido</p>

                    <div className="bg-base-card p-10 mt-4 rounded-md">
                        <header className="flex items-start gap-3">
                            <img src={PinIcon} alt=""/>
                            <div>
                                <h3 className="text-base-subtitle -mt-1">
                                    Endereço de entrega
                                </h3>
                                <p className="text-base-text text-sm">
                                    Informe o endereço onde deseja receber seu pedido
                                </p>
                            </div>
                        </header>

                        <form>


                        </form>
                    </div>

                    <div className="bg-base-card p-10 mt-3 rounded-md">
                        <header className="flex items-start gap-3">
                            <img src={Dollar} alt=""/>
                            <div>
                                <h3 className="text-base-subtitle -mt-1">
                                    Pagamento
                                </h3>
                                <p className="text-base-text text-sm">
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </p>
                            </div>
                        </header>

                        <div className="grid grid-cols-3 gap-3 mt-12">
                            <div className="flex items-center justify-center bg-base-button rounded-md gap-4 p-4 hover:bg-base-hover transition-all duration-300 cursor-pointer">
                                <img src={CreditCard} alt=""/>
                                <span className="text-base-text uppercase text-xs">Cartão de crédito</span>
                            </div>
                            <div className="flex items-center justify-center bg-base-button rounded-md gap-4 p-4 hover:bg-base-hover transition-all duration-300 cursor-pointer">
                                <img src={Bank} alt=""/>
                                <span className="text-base-text uppercase text-xs">Cartão de débito</span>
                            </div>
                            <div className="flex items-center justify-center bg-base-button rounded-md gap-4 p-4 hover:bg-base-hover transition-all duration-300 cursor-pointer">
                                <img src={Money} alt=""/>
                                <span className="text-base-text uppercase text-xs">Dinheiro</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-span-2">
                    <h3 className="text-base-subtitle font-bold">Cafés selecionados</h3>

                    <div className="rounded-tr-2xl rounded-bl-2xl bg-base-card p-10 mt-4">

                    </div>
                </article>
            </div>
        </div>
    )
}
