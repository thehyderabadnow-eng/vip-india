"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Departments", href: "/departments" },
    { name: "Issues Tracker", href: "/tracker" },
    { name: "Achievements", href: "/achievements" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/VIP-LOGO.png" // Ensure your logo is exactly named this in the public/ folder
                alt="VIP Logo" 
                width={50} 
                height={50} 
                className="object-contain"
              />
              <div className="hidden md:flex flex-col">
                <span className="text-xl font-bold text-vip-blue tracking-wide leading-tight">
                  Volunteers for Ideal Politics (VIP)
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  గుర్తిద్దాం • చర్చిద్దాం • రూపొందిద్దాం • పరిష్కరిద్దాం
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-vip-saffron font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/report" 
              className="bg-vip-blue hover:bg-vip-blue/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm"
            >
              Report an Issue
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-vip-blue hover:text-vip-saffron focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-vip-saffron rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link 
                href="/report" 
                className="w-full flex justify-center bg-vip-blue hover:bg-vip-blue/90 text-white px-4 py-3 rounded-md font-bold text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}