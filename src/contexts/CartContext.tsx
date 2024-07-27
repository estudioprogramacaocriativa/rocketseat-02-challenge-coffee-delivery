import {createContext, ReactNode, useState} from "react";
import {Product} from "../components/products";

interface CartContextProps {
    cart: Product[],
    addItemToCart: (item: Product) => void,
    removeItemFromCart: (item: Product) => void,
    increaseQuantity: (item: Product) => void,
    decreaseQuantity: (item: Product) => void,
    updateQuantity: (item: Product) => void,
    getQuantity: (item: Product) => number,
}

interface CartContextProviderProps {
    children: ReactNode,
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([])

    const addItemToCart = (item: Product) => {
        setCart((prevState) => {
            const existingProduct = prevState.find(state => state.id === item.id)

            if (existingProduct) {
                increaseQuantity(existingProduct)

                return prevState
            }

            return [...prevState, {...item, quantity: item.quantity++}]
        })
    }

    const removeItemFromCart = (item: Product) => {
        setCart((prevState) => {
            return prevState.filter(state => state.id !== item.id)
        })
    }

    const increaseQuantity = (item: Product) => {
        const existingProduct = cart.filter(itemCart => itemCart.id === item.id)

        if (existingProduct.length === 0) {
            item.quantity = 0;

            addItemToCart(item)

            return
        }

        setCart((prevState) => {
            return prevState.map(state => {
                return state.id === item.id ? { ...state, quantity: state.quantity++ } : state
            })
        })
    }

    const decreaseQuantity = (item: Product) => {
        setCart((prevState) => {
            const findProduct = prevState.find(state => state.id === item.id)

            if (findProduct && findProduct.quantity - 1 < 0) {
                return prevState.filter(state => state.id !== item.id)
            }

            return prevState.map(state => {
                return state.id === item.id ? { ...state, quantity: (state.quantity - 1 >= 0 ? state.quantity-- : 0) } : state
            })
        })
    }

    const updateQuantity = (item: Product) => {
        setCart((prevState) => {
            return prevState.map(state => {
                return state.id === item.id ? { ...state, quantity: item.quantity } : state
            })
        })
    }

    const getQuantity = (item: Product) => {
        const product = cart.find(state => state.id === item.id)

        if (product) {
            return product.quantity
        }

        return 0
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            removeItemFromCart,
            increaseQuantity,
            decreaseQuantity,
            updateQuantity,
            getQuantity,
        }}>
            {children}
        </CartContext.Provider>
    )
}
