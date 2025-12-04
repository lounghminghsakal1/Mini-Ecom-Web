"use client";

import Link from "next/link";
// import { useSearch } from "./SearchContext";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Image from "next/image";

export default function Header() {

    // const { setSearchQuery } = useSearch();

    const [isOpen, setIsOpen] = useState(false);

    function handleSideBar() {
        setIsOpen(prev => !prev);
    }

    return(
        <header className="relative flex justify-between items-center p-1 sm:p-2 bg-gray-700 text-white">
            <h2 className=" text-sm w-20 mr-0 font-bold sm:px-2 sm:text-md">Sakal Shop</h2>
            <div className="flex-1 max-w-md mx-2">
                <SearchBar className=""/>
            </div>
            <nav className="hidden sm:flex gap-4 text-sm mr-4">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/wishlist">Wishlist</Link>
            </nav>
            <Image src="/hamBurgerMenu.svg" width={30} height={30} alt="Ham Burger Menu Icon" className="hover:cursor-pointer sm:hidden" onClick={() => handleSideBar()} />
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-30 sm:hidden" onClick={() => setIsOpen(false)}>
                    <div className="fixed top-0 right-0 h-screen w-52 bg-gray-600 z-50 py-8 rounded-l-md sm:hidden">
                        <Image src="/closeBtn.svg" width={20} height={20} alt="Close Icon" className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => setIsOpen(false)} />
                        <ul className="flex flex-col gap-4 text-sm px-4 mt-6">
                            <li className="hover:text-gray-400"><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li className="hover:text-gray-400"><Link href="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
                            <li className="hover:text-gray-400"><Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
                            <li className="hover:text-gray-400"><Link href="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link></li>
                        </ul>
                    </div>
                </div>
            )}
            
        </header>
    );
}