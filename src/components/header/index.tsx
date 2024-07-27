import {MapPin, ShoppingCart} from "phosphor-react";
import logo from '../../assets/logo.svg'
import {CartContext} from "../../contexts/CartContext.tsx";
import {useContext} from "react";

export function Header() {
    const cartContext = useContext(CartContext)

    return (
        <header
            className="w-full py-5 px-4 fixed top-0 left-1/2 -translate-x-1/2 bg-white z-50 shadow"
        >
            <div className="flex justify-between items-center max-w-6xl m-auto">
                <img src={logo} alt=""/>

                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-purple-light rounded-md p-3">
                        <MapPin size={22} className="ml-2 mr-1" style={{color: '#8047F8'}}/>
                        <span className="text-purple-dark">Espirito Santo, ES</span>
                    </div>
                    <div className="bg-yellow-light rounded-md p-3 shopping-cart relative">
                    <span
                        className="bg-yellow-dark text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center absolute -top-3 -right-1"
                    >
                        {cartContext?.cart.length}
                    </span>
                        <ShoppingCart size={22} style={{color: '#C47F17'}}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
