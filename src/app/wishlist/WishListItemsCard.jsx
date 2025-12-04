"use client";

import Image from "next/image";
import { useCart } from "../CartContext";
import Modal from "../Modal";
import { useState } from "react";

export default function WishListItemsCard({product}) {

    const { addToCart,setCartQuantity } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    

    function handleAddToCartFromWishList() {
        setIsOpen(true);
        setCartQuantity(product, product.quantity)
    }


    return (
        <div className="flex w-60 sm:gap-1 items-center border-2 border-gray-500 rounded-md p-1 gap-2 m-4">
            <div className="basis-1/3 ">
                <Image src={product.thumbnail} width={80} height={50} alt={product.title} className="rounded-md border-2 border-gray-400 bg-gray-300"/>
            </div>
            <div className="basis-2/3 ">
                <h2 className="font-bold text-md w-36 truncate">{product.title}</h2>
                <span className="text-green-600 font-semibold block">${product.price}</span>
                <button onClick={handleAddToCartFromWishList} className="bg-green-500 text-white rounded-md px-2 text-sm py-1 hover:bg-green-400 hover:cursor-pointer">Add To Cart</button>
                
            </div>
            <Modal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Success"
            >
                <p className="text-gray-600 ">{product.title} added to cart successfully</p>
                <button onClick={() => setIsOpen(false)} className="w-full bg-gray-500 text-white px-2 py-1 mt-2 rounded hover:bg-gray-400 cursor-pointer" >Close</button>
            </Modal>
        </div>
    );
}