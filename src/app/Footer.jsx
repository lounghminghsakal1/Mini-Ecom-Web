export default function Footer() {
  return (
    <footer className="bg-[#2f3a4a] text-gray-300 py-10 mt-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Sakal Shop</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop destination for high-quality products, premium 
            collections and amazing offers. Shop with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-gray-500 pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">Special Discounts</li>
            <li className="hover:text-white cursor-pointer">Gift Cards</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-gray-500 pb-1">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">My Orders</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Return & Refund</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 border-b border-gray-500 pb-1">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              📍 <span>Trichy, Tamil Nadu, India</span>
            </li>
            <li className="flex gap-2">
              📞 <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-2">
              ✉️ <span>support@sakalshop.com</span>
            </li>
          </ul>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sakal Shop — All Rights Reserved.
      </div>
    </footer>
  );
}
