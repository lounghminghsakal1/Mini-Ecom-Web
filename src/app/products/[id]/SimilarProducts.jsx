"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/app/ProductCard"; 

export default function SimilarProducts({ product }) {
    
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {

        if (!product?.category) return;

        const fetchCategoryProducts = async () => {
            try{
                const res = await fetch(`https://dummyjson.com/products/category/${product.category}`)
                const data = await res.json();

                const items = (data.products || []).filter(p => p.id !== product.id);
                setSimilarProducts(items);

            } catch(err) {
                console.log(err);
            }
        }

        fetchCategoryProducts();

    },[product?.id, product?.category]);


    return(
        <section className="p-1">
            <h2 className="text-center text-xl font-semibold p-2 m-2">Similar Products</h2>
            
            <div className="grid grid-cols-2 sm:w-full sm:grid-cols-3 md:grid-cols-4 w-76 gap-2 items-center">
                {similarProducts.map(sProduct => (
                    <ProductCard key={sProduct.id} id={Number(sProduct.id)} img={sProduct.thumbnail} name={sProduct.title} brand={sProduct.brand} rating={sProduct.rating} price={sProduct.price} />
            ))}
            </div>
        </section>
    );
}