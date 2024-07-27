import {CartContextProvider} from "./contexts/CartContext.tsx";
import {Router} from "./Router.tsx";
import {BrowserRouter} from "react-router-dom";

import './global-styles.css'

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
