"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-semibold hidden md:flex">Projectify</div>

        <div className="flex-1 flex justify-center space-x-8">
          <Link href="/" className="text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/ai" className="text-lg hover:text-gray-400">
            AI
          </Link>
          <Link href="/about" className="text-lg hover:text-gray-400">
            About
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
            <Link href="/ai" className="text-lg hover:text-gray-400">
              AI
            </Link>
            <Link href="/about" className="text-lg hover:text-gray-400">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
