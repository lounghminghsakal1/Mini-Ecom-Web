import Image from "next/image"; 

export default function HeroSection() {
    return(
        <div className="m-2">
            <div className="flex flex-1 m-3 justify-center sm:hidden">
                <div className="relative max-w-md">
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
                />
                </div>
            </div>
            <div className="w-full relative h-64">
                <Image src="/images/hero4.png" fill alt="hero banner" className="object-cover object-right md:object-center"/>           
            </div>        
        </div>
   );
}