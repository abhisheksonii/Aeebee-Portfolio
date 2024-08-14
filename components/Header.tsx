"use client";
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 backdrop-blur-md sticky top-0 z-50 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
            ABH1SH3K
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-green-300 hover:text-green-200 transition-colors">Home</Link>
            <button className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400 transition-colors duration-300">
              Contact Me
            </button>
          </div>
          <button
            className="md:hidden text-green-400 hover:text-green-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 px-4">
          <Link href="/" className="block py-2 text-green-300 hover:text-green-200 transition-colors">Home</Link>
          <button className="w-full mt-2 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}