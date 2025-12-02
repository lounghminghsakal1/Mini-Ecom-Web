"use client";

import { useCart } from "../CartContext";
import WishListItemsCard from "./WishListItemsCard";

export default function WishlistItems() {
    
    const { wishlistItems } = useCart();
    
    return(
        <div>
        
            <h2 className="text-center font-bold text-gray-600 text-xl mt-2">WishList Items</h2>
            
            {wishlistItems.length <=0 ? (
                <div className="text-center font-bold m-5">
                    WishList is empty...
                </div>
            ) : (
                <div className="flex flex-wrap justify-center ">
                    {wishlistItems.map((product) => <WishListItemsCard key={product.id} product={product} />)}
                </div>
            )}
        </div>
    );
}