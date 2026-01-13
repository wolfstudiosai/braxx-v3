
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { CartProvider } from '../components/CartContext';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="bg-[#d4d4d4] selection:bg-black selection:text-[#e2ff4a] min-h-screen font-sans text-black overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatAssistant />
        
        {/* Global Aesthetic Noise Layer */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[9999]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100" height="100" filter="url(#noise)" />
          </svg>
        </div>
      </div>
    </CartProvider>
  );
}
