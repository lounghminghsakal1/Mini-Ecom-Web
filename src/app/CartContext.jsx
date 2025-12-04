"use client";

import { useState,createContext, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({children }) {
    
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishListItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        
        setCartItems((prev) => {

            const exists = prev.find((p) => p.id === product.id);
            if (exists) {
                return prev.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                )
            }

            return [...prev, {...product, quantity}]
        })

    };

    const addToWishList = (product) => {
        setWishListItems((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            if (exists) {
                return prev;
            }
            return [...prev, product];
        })
    };

    const removeItemFromCart = (id) => {
        const afterRemoved = cartItems.filter((p) => p.id !== id);
        setCartItems(afterRemoved);
    }


    const increaseQuantity = (id) => {
        setCartItems(prev => 
            prev.map(p => p.id === id ? {...p, quantity : p.quantity + 1} : p)
        );
    };

    const reduceQuantity = (id) => {
        setCartItems(prev => 
            prev.map(item => item.id === id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item)
        );
    };


    const setCartQuantity = (product, quantity = 1) => {
        setCartItems((prev) => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) {
                return prev.map(p => p.id === product.id ? {...p, quantity} : p);
            }
            return [...prev, {...product, quantity}]
        })
    }

    const value = {
        addToCart,
        addToWishList,
        increaseQuantity,
        reduceQuantity,
        removeItemFromCart,
        cartItems,
        setCartItems,
        setCartQuantity,
        wishlistItems
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    return useContext(CartContext);
}