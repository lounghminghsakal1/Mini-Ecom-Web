"use client";

import { useEffect, useState,useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar() {

    
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [isAutoCompleteSearchOpen, setIsAutoCompleteSearchOpen] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const itemsRef = useRef([]);
    itemsRef.current = [];

    const fetchData = async () => {
        try{
            const res = await fetch("https://dummyjson.com/products/search?q="+input);
            const json = await res.json();
            setResults(json.products);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    },[input]);

    useEffect(() => {
        if (selectedIndex !== -1 && itemsRef.current[selectedIndex]) {
            itemsRef.current[selectedIndex].scrollIntoView({
                behaviour: "smooth",
                block: "nearest"
            })
        }
    },[selectedIndex]);


    return(
        <div className="flex flex-1 my-1 justify-center">
                <div className=" relative w-full max-w-md">
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
                    className="w-full pl-10 pr-4 py-2 rounded-full text-gray-300 bg-gray-700 border border-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition"
                    value={input ?? ""}
                    onChange={(e) => setInput(e.target.value) } 
                    onFocus={() => setIsAutoCompleteSearchOpen(true)}
                    onBlur={() => {
                        setTimeout(() => {
                            setIsAutoCompleteSearchOpen(false);
                        }, 300)
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "ArrowDown") {
                            e.preventDefault();
                            setSelectedIndex(prev => {
                                return prev < results.length-1 ? prev +1 : 0
                            })
                        }

                        if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setSelectedIndex(prev => {
                                return prev > 0 ? prev-1 : results.length-1 
                            })
                        }

                        if (e.key === "Enter") {
                            e.preventDefault();
                            if (selectedIndex >= 0) {
                                const selected = results[selectedIndex];
                                window.location.href = `/products/${selected.id}`
                            }
                        }

                        if (e.key === "Escape") {
                            e.preventDefault();
                            setIsAutoCompleteSearchOpen(false);
                        }
                    }
                }  
                    
                />

                {isAutoCompleteSearchOpen && (
                    <div className="absolute rounded z-50 max-h-80 overflow-y-scroll w-full bg-gray-600 text-gray-300">
                        {results.map((r,index) => (
                            <Link key={r.id} href={`/products/${r.id}`}  >
                                <div 
                                    ref={(element) => itemsRef.current[index] = element}
                                    className={`flex items-center gap-2 p-1  cursor-pointer ${index === selectedIndex ? "bg-gray-500" : "bg-gray-600"} hover:bg-gray-500`} 
                                    onClick={() => setInput("")} 
                                    onMouseDown={() => {
                                    window.location.href = `/products/${r.id}`
                            }}>
                                    <Image src={r.thumbnail} width={40} height={40} alt="product image" className="bg-gray-500 rounded  " />
                                    <p>{r.title}</p>
                                </div>
                            </Link>
                        )) }
                    </div> 
                )}
                </div>
            </div>
    );
}