"use client";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "../CartContext";
import CartProductsCard from "./CartProductsCard";


export default function CartItemsDisplay() {

    const {cartItems} = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    const total = useMemo(
        () => 
            cartItems.reduce((totalP, currentItem) => 
                totalP + currentItem.price * currentItem.quantity ,0
        ),
        [cartItems]
        ); 
    //setTotalPrice(total)

    function handleBuyAll() {
        const answer = confirm("Are you sure you want to buy all the cart items ?? ");
        if (answer) {
            alert('All cart items purchase has been processed');
        } else {
            alert('Purchase has been cancelled');
        }
    }

    return(
        <div>
            <h2 className="text-center font-bold text-gray-600 text-xl mt-3">Cart Items</h2>
            {cartItems.length === 0 ? (
                <div className="text-center font-bold m-5">Cart is empty...</div>
            ) : (
                <div className="grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-2 md:grid-cols-3">
                    {cartItems.map((product) => <CartProductsCard key={product.id} product={product} quantity={product.quantity} />)}
                </div>
            )}

            {total === 0 ? (
                <div></div>
                ) : (
                <div className="p-2 flex justify-end">
                    <h2 className="text-center block text-[16px] w-44 px-2 rounded-md text-white bg-gray-500 text-lg flex-end">Grand Total: ${(total).toFixed(2)} </h2>
                    <button className="w-16 bg-sky-800 text-white text-md mx-2 rounded" onClick={handleBuyAll} >Buy All</button>
                </div>
            )}
            
            <hr />           
        </div>
    );
}