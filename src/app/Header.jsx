"use client";

import Link from "next/link";
import { useSearch } from "./SearchContext";

export default function Header() {

    const { setSearchQuery } = useSearch();

    return(
        <header className="flex justify-between items-center p-1 sm:p-2 bg-gray-700 text-white">
            <h2 className="text-lg font-bold px-1  sm:px-2">Sakal Shop</h2>
            <div className="hidden sm:flex flex-1 mx-6 justify-center">
                <div className="relative w-full max-w-md">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    />
                    </svg>
                </span>                
                    <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                    onChange={(e) => setSearchQuery(e.target.value) } 
                />
                </div>
            </div>
            <ul className="flex gap-2 text-sm px-1">
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/wishlist">Wishlist</Link></li>
            </ul>
        </header>
    );
}