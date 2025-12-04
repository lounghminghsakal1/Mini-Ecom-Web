"use client";

import { useEffect, useState } from 'react';

import { useSearch } from '../SearchContext';

import { useSearchParams } from 'next/navigation';

import ProductCard from '../ProductCard';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function ProductsDisplay() {
    
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('Newest');    
    const [result, setResult] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const [priceRange, setPriceRange] = useState({min:0, max:2000});
    const [minRating, setMinRating] = useState(0);

    const { searchQuery } = useSearch();

    const query = searchQuery.toLowerCase().trim();

    const [visibleCount, setVisibleCount] = useState(20);
    

    const [loading, setLoading] = useState(true);
    
    const visibleProducts = result.slice(0,visibleCount);

    
    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                let url;
                if (category) {
                    url=`https://dummyjson.com/products/category/${category}`

                } else{
                    url = 'https://dummyjson.com/products?limit=1000';
                }

                const res = await fetch(url);
                const data = await res.json();
                setProducts(data.products);
                setResult(data.products);

                const uniqueBrands = [...new Set(data.products.map(product => product.brand).filter(Boolean))].sort();
                setBrands(uniqueBrands);
    
            } catch(err) {
                console.error(err);
            }
        };
        fetchProducts();
    },[]);

    useEffect(() => {

        let filtered = [...products];


        if (sortBy === 'newest') {
            setResult(filtered.sort((a,b) => b.id - a.id));
        }
        else if (sortBy === 'oldest') {
            setResult(filtered.sort((a,b) => a.id - b.id));
        }
        else if (sortBy === 'Price: Low to High') {
            setResult(filtered.sort((a,b) => a.price - b.price));
        }
        else if (sortBy === 'Price: High to Low') {
            setResult(filtered.sort((a,b) => b.price - a.price));
        }


        if (selectedBrands.length === 0) {
            setResult(products);
        } else {
            filtered = filtered.filter(product => selectedBrands.includes(product.brand)); 
        }


        filtered = filtered.filter(p => p.price <= priceRange.max && p.price >= priceRange.min)

        filtered = filtered.filter(p => p.rating >= minRating);


        if (query) {
            filtered = filtered.filter((p) => p.title.toLowerCase().includes(query));
        }
        console.log("query =", query, "filtered length =", filtered.length);
        setResult(filtered);


    },[sortBy, selectedBrands, priceRange, minRating,query]);
    

    function handleBrandChange(e) {
        
        const brandName = e.target.value;
        
        if (e.target.checked) {
            setSelectedBrands(prev => [...prev, brandName]);
        }
        else {
            setSelectedBrands(prev => prev.filter((b) => b !== brandName));
        }
    }

    
    function loadMore() {
        setVisibleCount((prev) => prev + 20);
    }
 
    
    return(
        <section className='sm:flex '>
            <div className="border-2 p-4 shadow-gray-400 shadow-md rounded sm:basis-[30%] sm:sticky sm:top-0 sm:self-start sm:overflow-y-auto sm:max-h-[100vh]">
                <h1 className="font-bold text-lg">Filters</h1>
                <div className="flex flex-col gap-1 m-2">
                    <label className='text-[15px] font-semibold'>Sort By</label>
                    <select value={sortBy}
                        onChange={e => setSortBy(e.target.value)} 
                        className="text-[14px] border p-1 border-gray-500 rounded">

                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        
                    </select>
                </div>
                <div className='max-h-40 overflow-y-scroll flex flex-col m-2 '>
                    <label className='text-[15px] font-semibold'>Brands</label>
                    {brands.length > 0 && (
                        brands.map(brand => (
                            <div key={brand} className='flex gap-2 items-center'>
                                <input type="checkbox" value={brand} onChange={handleBrandChange}/>
                                <label htmlFor={brand}>{brand}</label>
                            </div>
                        ))
                    )}
                </div>
                <div className='m-2 mt-4'>
                    <label className='font-semibold text-[15px]'>Price Range</label>
                    <div className='flex items-center gap-3'>
                        <input type="number" min="0" value={priceRange.min} onChange={(e) => setPriceRange(prev => ({...prev, min: Number(e.target.value)}))} className='w-24 border-gray-400 border-2 rounded' />
                        <span>to</span>
                        <input type="number" min="0" value={priceRange.max} onChange={(e) => setPriceRange(prev => ({...prev, max: Number(e.target.value)}))} className='w-24 border-gray-400 border-2 rounded' />
                    </div>
                    <input type="range" min="0" max="2000" value={priceRange.max} onChange={(e) => setPriceRange(prev => ({...prev, max : Number(e.target.value)}))} className='w-full' />
                </div>
                <div className='m-2'>
                    <label className='font-semibold text-[15px]'>Minimum Rating</label>
                    <div >
                        {[4,3,2,1].map(rating => (
                            <div key={rating} className='flex items-center gap-1'>
                                <input type="radio" checked={minRating===rating} onChange={() => setMinRating(rating)} />
                                <span>{"★".repeat(rating)}{"☆".repeat(5-rating)}</span>
                                <span className='text-sm ml-1'>& Up</span>    
                            </div>
                        ))}
                        <div className='flex items-center gap-1'>
                            <input type="radio" checked={minRating === 0} onChange={() => setMinRating(0)} />
                            <span className='text-sm'>Any Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=' flex flex-col items-center p-2 sm:basis-[70%] '>
                <h1 className='font-semibold text-2xl'>Products</h1>
                <InfiniteScroll
                    dataLength={visibleProducts.length}
                    next={loadMore}
                    hasMore={visibleCount < result.length}
                    loading={<p className='text-center font-semibold'>Loading ...</p>}
                    endMessage={<p className='text-center font-semibold '>End of products...</p>}
                    className='sm:w-2xl'
                >
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                        {visibleProducts.length > 0 && (
                            visibleProducts.map(product => (
                                <ProductCard key={product.id} id={product.id} img={product.thumbnail} name={product.title} brand={product.brand} price={product.price} rating={product.rating} />
                            ))
                        )}
                    </div>
                </InfiniteScroll>                              
            </div>
        </section>
    );
}