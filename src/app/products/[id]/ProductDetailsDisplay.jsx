"use client";

import { useEffect,useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import SimilarProducts from "./SimilarProducts";
import { useCart } from "@/app/CartContext";

export default function ProductDetailsDisplay() {
    
    const { id } = useParams();

    const [product, setProduct] = useState({});

    const { addToCart, addToWishList } = useCart();

    useEffect(() => {
        try{
            fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        } catch(err) {
            console.log(err);
        }
    },[id]);

    function handleAddToCart(product) {
        alert(`${product.title} is added to the cart`);
        console.log(product.title + "is added to the cart");
        addToCart(product);
    }

    function handleAddtoWishlist(product) {
        alert(`${product.title} is added to the wishlist`);
        console.log(product.title + "is added to the wishlist");    
        addToWishList(product);
    }

    if (!product.thumbnail) return null;
    
    return(
        <section>
                <div className="p-1 sm:flex">
                <Image src={product.thumbnail || null} alt="product image" width={500} height={500} className="bg-gray-300 p-2 rounded-md" />
                <div>
                    <div>
                    <h1 className="text-center text-xl font-bold m-2 ">Products Details</h1>
                    <div className="p-2 space-y-1">
                        <h2 className="font-semibold ">{product.title}</h2>
                        <span>{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5-Math.floor(product.rating))}</span>
                        <p className="text-gray-500 text-sm">{product.description}</p>
                        <span className="text-2xl font-bold text-green-600">${product.price}<span className="line-through ml-2 text-lg text-gray-600">${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}</span></span>
                    </div>
                        
                </div>
                <div className="flex items-center justify-between p-2">
                    <button onClick={() => handleAddToCart(product)} className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-400 hover:cursor-pointer">Add to Cart</button>
                    <button onClick={() => handleAddtoWishlist(product)} className="bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-400 hover:cursor-pointer">Add to Wishlist</button>
                </div>
                </div>                
                </div>
    
              
            <hr  />
            <SimilarProducts product={product} />
        </section>
    );
}