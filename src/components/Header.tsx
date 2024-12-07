"use client"

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm">
      <div className="wrapper mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl sm:text-2xl font-bold text-black">Exclusive</div>

        {/* Hamburger Button (for small screens) */}
        <button
          className="block md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-8 items-center top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-10 p-4 md:p-0`}
        >
          <div className="relative group">
            <Link
              href="/"
              className="text-black font-normal text-sm sm:text-base font-['Poppins']"
            >
              Home
            </Link>
            <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </div>
          <Link
            href="/contact"
            className="text-black font-normal text-sm sm:text-base font-['Poppins']"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-black font-normal text-sm sm:text-base font-['Poppins']"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="text-black font-normal text-sm sm:text-base font-['Poppins']"
          >
            Sign Up
          </Link>
        </nav>

        {/* Search and Icons Section */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
          {/* Search Box */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 text-black text-sm placeholder-gray-500 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2"
            >
              <path
                d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Favorite Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5H7L10 22H26"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </header>
  );
};

export default Header;
