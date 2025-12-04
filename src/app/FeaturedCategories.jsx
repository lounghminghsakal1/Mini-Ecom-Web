import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategories() {
    
    const featuredCategoriesData = [
        {id:1 ,img:"/images/features/f1.png", text: "Beauty", slug: "beauty"},
        {id:2 ,img:"/images/features/f2.png", text: "Mobile Accessories", slug: "mobile-accessories"},
        {id:3 ,img:"/images/features/f3.png", text: "Sports Items", slug: "sports-accessories"},
        {id:4 ,img:"/images/features/f4.png", text: "Furniture", slug: "furniture"},
        {id:5 ,img:"/images/features/f5.png", text: "Groceries", slug: "groceries"},
        {id:6 ,img:"/images/features/f6.png", text: "Kitchen Accessories", slug: "kitchen-accessories"},
        {id:7 ,img:"/images/features/f2.png", text: "Sports Accessories", slug: "sports-accessories"},
        {id:8 ,img:"/images/features/f6.png", text: "Smartphones", slug: 'smartphones'}
    ];

    
    return(
        <div>
            <div className="m-4">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-gray-900 font-bold">Shop by Categories</h1>
                    <p className="text-gray-500 my-2">Explore our collections</p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {featuredCategoriesData.map(category => (
                        <Link key={category.id} href={`/products?category=${category.slug}`}>
                            <div className="flex flex-col justify-center items-center border-2 p-1 border-gray-700 rounded-2xl h-40 hover:shadow-[4px_4px_10px_gray] transition ease-in delay-50 sm:h-44 md:h-48">
                                <Image src={category.img} alt={category.text} width={200} height={300} className="rounded " />
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-center">{category.text}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}