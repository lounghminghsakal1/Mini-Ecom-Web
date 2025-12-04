import Image from "next/image"; 

export default function HeroSection() {
    return(
        <div className="m-2">
            
            <div className="w-full relative h-64">
                <Image src="/images/hero4.png" fill alt="hero banner" className="object-cover object-right md:object-center"/>           
            </div>        
        </div>
   );
}