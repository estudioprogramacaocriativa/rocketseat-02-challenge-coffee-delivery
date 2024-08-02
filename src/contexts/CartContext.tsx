import {createContext, ReactNode, useState} from "react";
import {Product} from "../components/products";

interface CartContextProps {
    cart: Product[],
    shipment: number,
    addItemToCart: (item: Product) => void,
    removeItemFromCart: (item: Product) => void,
    increaseQuantity: (item: Product) => void,
    decreaseQuantity: (item: Product) => void,
    updateQuantity: (item: Product) => void,
    getQuantity: (item: Product) => number,
    cartTotal: () => number,
    cartSubTotal: () => number,
    itemTotal: (item: Product) => number,
    paymentMethod: PaymentMethodType,
    handlePaymentMethod: (method: PaymentMethodType) => void,
    handleAddress: (key: string, value: string) => void,
    address: AddressType,
    cartIsValid: () => boolean,
}

interface CartContextProviderProps {
    children: ReactNode,
}

type PaymentMethodType = 'credit-card' | 'debit-card' | 'money';

type AddressType = {
    zipCode: string,
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    name: string,
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([])
    const [shipment] = useState(4.99)
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('credit-card')
    const [address, setAddress] = useState<AddressType>({
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        name: ''
    })

    const cartIsValid = () => {
        return cart.length > 0 &&
            paymentMethod !== null &&
            address.zipCode !== '' &&
            address.name !== '' &&
            address.neighborhood !== '' &&
            address.city !== '' &&
            address.state !== '' &&
            address.street !== ''
    }

    const handlePaymentMethod = (method: PaymentMethodType) => {
        setPaymentMethod(method)
    }

    const handleAddress = (key: string, value: string) => {
        setAddress((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

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
                removeItemFromCart(item)

                return prevState
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

    const cartSubTotal = () => {
        return cart.reduce((acc, state) => {
            return acc + state.price * state.quantity
        }, 0)
    }

    const cartTotal = () => cartSubTotal() + shipment

    const itemTotal = (item: Product) => item.price * item.quantity

    return (
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            removeItemFromCart,
            increaseQuantity,
            decreaseQuantity,
            updateQuantity,
            getQuantity,
            cartTotal,
            cartSubTotal,
            itemTotal,
            handlePaymentMethod,
            handleAddress,
            cartIsValid,
            shipment,
            paymentMethod,
            address,
        }}>
            {children}
        </CartContext.Provider>
    )
}
