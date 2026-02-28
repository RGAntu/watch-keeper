import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    useEffect( () => {
        
    },[])
    return <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;