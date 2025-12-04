import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
    
    return(
        <div>
            <Link href={`/products/${props.id}`}>
                <div className="w-full max-w-[190px] m-2 rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300 p-3">
                    <div className="w-full h-28 bg-gray-200 overflow-hidden rounded-lg">
                        <Image src={props.img} alt={props.name+" image"} width={200} height={200} className="object-cover w-full h-full"/>
                    </div>
                    <div className="mt-2 p-1 ">
                        <h3 className="text-lg font-semibold truncate">{props.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{props.brand}</p>
                        <p className="text-yellow-500 font-semibold">⭐{props.rating}</p>
                        <div className="flex flex-col ">
                            <p className="text-md font-bold text-green-600">${(props.price).toFixed(2)}</p>
                            <button className="rounded-full text-white text-sm bg-blue-600 hover:bg-blue-400 hover:cursor-pointer px-2 py-1">View Details</button>    
                        </div>
                    </div>
                </div>
            </Link>
        </div> 
    );
}