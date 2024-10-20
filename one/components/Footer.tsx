// components/Footer.js
'use client'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 pt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">ShopMate</h3>
          <p className="text-sm">
            Your one-stop shop for everything! Find the best deals on a wide range of products.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
                Help & FAQs
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
                Returns & Exchanges
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
              Men's Collection
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
                Women's Collection
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-gray-400">
                Kids' Collection
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Sale
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Get the latest updates on new arrivals and exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-gray-800"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Designed and Developed by Sidra Raza.</p>
      </div>
    </footer>
  );
};

export default Footer;
