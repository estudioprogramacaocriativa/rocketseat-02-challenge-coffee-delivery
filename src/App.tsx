import {Header} from "./components/header";
import {Hero} from "./components/hero";
import {Products} from "./components/products";

import './index.css'
import {CartContextProvider} from "./contexts/CartContext.tsx";

function App() {
    return (
        <CartContextProvider>
            <Header />
            <Hero />
            <Products />
        </CartContextProvider>
    )
}

export default App
