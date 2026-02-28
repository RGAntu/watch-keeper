import React, { useState } from 'react';
import { CartContext } from './Contexts';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState("antu")
    return <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;