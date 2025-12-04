
import Image from "next/image";
import { useCart } from "../CartContext";

export default function WishListItemsCard({product}) {

    const { addToCart } = useCart();
    
    return (
        <div className="flex w-60 sm:gap-1 items-center border-2 border-gray-500 rounded-md p-1 gap-2 m-4">
            <div className="basis-1/3 ">
                <Image src={product.thumbnail} width={80} height={50} alt={product.title} className="rounded-md border-2 border-gray-400 bg-gray-300"/>
            </div>
            <div className="basis-2/3 ">
                <h2 className="font-bold text-md w-36 truncate">{product.title}</h2>
                <span className="text-green-600 font-semibold block">${product.price}</span>
                <button onClick={() => addToCart(product, product.quantity)} className="bg-green-500 text-white rounded-md px-2 text-sm py-1 hover:bg-green-400 hover:cursor-pointer">Add To Cart</button>
                
            </div>
        </div>
    );
}