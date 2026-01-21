"use client";

import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';
import { Link } from './Link';
import { ViewState } from '../types';

interface NavbarProps {
  setView?: (view: ViewState) => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, cartCount: propCartCount }) => {
  const { cartCount: contextCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Favor prop value if provided, otherwise use context
  const count = propCartCount !== undefined ? propCartCount : contextCartCount;

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/progress', label: 'Progress' },
    { href: '/blog', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 pointer-events-none">
        {/* Mobile Menu Button */}
        <div className="flex-1 flex justify-start lg:hidden pointer-events-auto">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-black hover:opacity-70 transition-colors"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex-1 hidden lg:block"></div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center pointer-events-auto">
          <Link href="/" className="text-2xl sm:text-3xl font-black italic tracking-tighter text-black">
            BRAXX
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-6 pointer-events-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black hover:opacity-70 transition-colors font-black uppercase tracking-widest text-[10px]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="relative text-black hover:opacity-70 transition-colors p-2">
            <ShoppingCart size={18} strokeWidth={2.5} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-[#e2ff4a] text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg">
                {count}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Cart Button */}
        <div className="flex-1 flex justify-end lg:hidden pointer-events-auto">
          <Link href="/cart" className="relative text-black hover:opacity-70 transition-colors p-2">
            <ShoppingCart size={20} strokeWidth={2.5} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-[#e2ff4a] text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] z-[101] bg-[#d4d4d4] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <span className="text-2xl font-black italic tracking-tighter text-black">BRAXX</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-black hover:opacity-70 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-8 px-6">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-black/10">
            <p className="text-[9px] font-black text-black/40 uppercase tracking-widest">
              © 2024 BRAXX Strategic Operations
            </p>
          </div>
        </div>
      </div>
    </>
  );
};