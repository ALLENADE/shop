"use client";

import { useState } from "react";
import { ChevronDown, Heart, ShoppingBag, Menu, X } from "lucide-react";
import SearchResult from "../searchResult/searchResult";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-evenly items-center py-8 px-10">
        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            Shop <ChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-gray-600">Our Story</li>
          <li className="cursor-pointer hover:text-gray-600">Blog</li>
          <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
        </ul>

        {/* Icons & Buttons (Always Visible) */}
        <div className="flex md:ml-8 items-center gap-4">
          <SearchResult />
          <Heart className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          <Button value="black">Login</Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-10" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Overlay + Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)} // Clicking outside will close the menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Smooth fade out
          >
            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "100%" }} // Start from right
              animate={{ x: 0 }} // Slide in
              exit={{ x: "100%" }} // Slide out smoothly
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button className="self-end" onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>

              <ul className="flex flex-col gap-6 text-lg">
                <li className="cursor-pointer hover:text-gray-600">Home</li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                  Shop <ChevronDown className="w-4 h-4" />
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  Our Story
                </li>
                <li className="cursor-pointer hover:text-gray-600">Blog</li>
                <li className="cursor-pointer hover:text-gray-600">
                  Contact Us
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
