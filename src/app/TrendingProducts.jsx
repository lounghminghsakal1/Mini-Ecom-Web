import ProductCard from "./ProductCard";

export default function TrendingProducts() {
    
    const trendingProducts = [
        {id:81, name:"Lenovo Laptop", brand:"Lenovo", rating:"4.7", price:3999.99 , img:"/images/hero4.png"},
        {id:2, name:"Moto Mobile Phone", brand:"Motorola", rating:"4.5", price:1499.99 , img:"/images/hero4.png"},
        {id:3, name:"H&M Clothes", brand:"H&M", rating:"4.6", price:260.99, img:"/images/hero4.png"},
        {id:123, name:"IPhone", brand:"Apple", rating:"3.5", price:2099.99 , img:"/images/hero4.png"},
        {id:133, name:"Samsung Galaxy S24 Ultra", brand:"Samsung", rating:"4.9", price:3199.99 , img:"/images/hero4.png"},
        {id:101, name:"Boat AirPods", brand:"Boat", rating:"4.6", price:799.99 , img:"/images/hero4.png"},
    ];
    
    return(
        <div className="m-3 rounded bg-gray-200">
            <h1 className="text-2xl font-semibold text-center">Trending Products</h1>
            <p className="text-md text-gray-500 text-center mb-3">Know the trend to purchase</p>
            <div className="flex justify-center">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {trendingProducts.map(product => (
                        <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} brand={product.brand} price={product.price} rating={product.rating} />
                    ))}
                </section>
            </div>
        </div>
    );
}