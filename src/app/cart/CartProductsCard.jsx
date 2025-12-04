"use client";

import Image from "next/image";
import { useCart } from "../CartContext";
import Link from "next/link";
import { useState } from "react";

import ConfirmPopup from "../ConfirmPopup";


export default function CartProductsCard(props) {
    
    // const product = [
    //     {img: "/images/hero4.png", title:"Example Product", price:19, quantity:1},
    // ];
    
    const { increaseQuantity, reduceQuantity,removeItemFromCart,cartItems,setCartItems } = useCart();

    const [isOpen, setIsOpen] = useState(false);//for buy now button

    const [isRemoveOpen, setIsRemoveOpen] = useState(false);


    function handleBuyNow() {
        setIsOpen(true);
        // const answer = confirm(`Are you sure you want to buy ${props.product.quantity} quantity/quantities of ${props.product.title} ?`);
        
        // if (answer) {
        //     alert(`${props.product.title} purchase is processed`);
        //     setCartItems(cartItems.filter(p => p.id !== id))
        // } else {
        //     alert('purchase is cancelled');
        // }
    }

    function confirmPurchase(id) {
        setCartItems(cartItems.filter(p => p.id !== id));
        setIsOpen(false);
    }

    function handleRemove() {
        setIsRemoveOpen(true);
    }

    function confirmRemove() {
        setIsRemoveOpen(false);
        removeItemFromCart(props.product.id);
    }

    



    return(
        <div className="w-72 border-2 border-gray-500 rounded-md p-1 m-4">
            <div className="flex items-center gap-2">
                <div className="basis-1/3 sm:w-36 shrink-0">
                    <Image src={props.product.thumbnail} width={100} height={50} alt={props.product.title} className="rounded-md border-2 border-gray-400 bg-gray-300" />    
                </div>
                <div className="basis-2/3">
                    <h2 className="font-bold text-md w-44 truncate">{props.product.title}</h2>
                    <span className="text-gray-500">${props.product.price} x {props.product.quantity}</span>
                    <div className="flex justify-center w-16 mt-2">
                        <button className="bg-gray-500 w-8 text-white rounded hover:cursor-pointer hover:bg-gray-400" onClick={() => reduceQuantity(props.product.id)} >-</button>
                        <span className="border w-8 text-center rounded">{props.product.quantity}</span>
                        <button className="bg-gray-500 w-8 text-white rounded hover:cursor-pointer hover:bg-gray-400" onClick={() => increaseQuantity(props.product.id)}>+</button>
                    </div>
                    <h2 className="text-green-600 font-semibold text-md">Total: ${(props.product.price * props.product.quantity).toFixed(2)}</h2>
                </div>
            </div>
            
            <div className="flex justify-between m-1 text-[14px]">
                <button className="bg-red-500 text-white rounded-md px-2 hover:cursor-pointer hover:bg-red-400 " onClick={handleRemove} >Remove item</button>
                <Link href={`/products/${props.product.id}`}><button className="bg-blue-500 text-white rounded-md px-2 hover:cursor-pointer hover:bg-blue-400">View Details</button></Link>
                <button className="bg-green-500 text-white rounded-md px-2 hover:cursor-pointer hover:bg-green-400" onClick={() => handleBuyNow(props.product.id)}>Buy Now</button>
            </div>
            <ConfirmPopup
                isOpen={isOpen}
                message={`Are you sure you want to buy ${props.product.quantity} quantity/quantities of ${props.product.title} ?`}
                onConfirm={() => confirmPurchase(props.product.id)}
                onCancel={() => setIsOpen(false)}
            />


            <ConfirmPopup 
                isOpen={isRemoveOpen}
                message={`Are you sure you want to remove the item ${props.product.title} from cart ??`}
                onConfirm={confirmRemove}
                onCancel={() => setIsRemoveOpen(false)}
            />
                
            
        </div>       
    );
}