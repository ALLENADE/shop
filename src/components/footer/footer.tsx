"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-sm">
      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-10">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-lg font-bold">Krist</h2>
            <p className="text-gray-400 mt-2">📞 (704) 555-0127</p>
            <p className="text-gray-400">📧 krist@example.com</p>
            <p className="text-gray-400">
              📍 389 Ranchview Dr, California 62639
            </p>
            {/* Payment Icons */}
            <div className="flex gap-2 mt-3">
              <Image src="/visa.png" alt="Visa" width={30} height={20} />
              <Image
                src="/mastercard.png"
                alt="MasterCard"
                width={30}
                height={20}
              />
              <Image src="/paypal.png" alt="PayPal" width={30} height={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Information</h3>
              <ul className="text-gray-400 space-y-2 mt-2">
                <li>My Account</li>
                <li>Login</li>
                <li>My Cart</li>
                <li>Wishlist</li>
                <li>Checkout</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Service</h3>
              <ul className="text-gray-400 space-y-2 mt-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          {/* Subscription & Socials */}
          <div>
            <h3 className="font-semibold">Subscribe</h3>
            <p className="text-gray-400 mt-2">
              Be the first to know about new collections and product launches.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-2 rounded-l-md bg-gray-800 border border-gray-600 text-white"
              />
              <button className="bg-white text-black px-4 rounded-r-md">
                →
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Facebook className="cursor-pointer hover:text-gray-400" />
              <Twitter className="cursor-pointer hover:text-gray-400" />
              <Instagram className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center text-gray-500 py-4 border-t border-gray-700">
        © 2023 Krist. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
