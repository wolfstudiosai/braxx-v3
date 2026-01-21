
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';


export const Footer = () => {
  return (
    <footer className="relative h-[85vh] min-h-[700px] overflow-hidden">
      {/* High-Impact Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2400&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-24 py-16">

        {/* Central Brand Identity (Replaces Newsletter) */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-4xl mx-auto w-full">
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-white text-5xl sm:text-[8rem] md:text-[10rem] lg:text-[14rem] font-bold italic tracking-tighter leading-none opacity-90 select-none">
              BRAXX
            </h1>

            <div className="flex items-center justify-center gap-6 sm:gap-10 text-white/80">
              <a href="#" className="hover:text-[#e2ff4a] transition-colors transform hover:scale-110 p-2"><Twitter size={24} className="sm:w-8 sm:h-8" /></a>
              <a href="#" className="hover:text-[#e2ff4a] transition-colors transform hover:scale-110 p-2"><Instagram size={24} className="sm:w-8 sm:h-8" /></a>
              <a href="#" className="hover:text-[#e2ff4a] transition-colors transform hover:scale-110 p-2"><Facebook size={24} className="sm:w-8 sm:h-8" /></a>
              <a href="#" className="hover:text-[#e2ff4a] transition-colors transform hover:scale-110 p-2"><Linkedin size={24} className="sm:w-8 sm:h-8" /></a>
            </div>

            <div className="space-y-2 pt-8">
              <p className="text-[10px] font-black text-white tracking-[0.3em] uppercase">Los Angeles Strategic Outpost</p>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">© 2024 BRAXX STRATEGIC OPERATIONS. ALL INTEL RESERVED.</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="w-full flex justify-center pb-8 animate-in fade-in duration-1000 delay-500">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
            <Link href="/about" className="hover:text-[#e2ff4a] transition-colors">About</Link>
            <Link href="/blog" className="hover:text-[#e2ff4a] transition-colors">Blog</Link>
            <Link href="/terms" className="hover:text-[#e2ff4a] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#e2ff4a] transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-[#e2ff4a] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Strike Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none blur-3xl opacity-30"></div>
    </footer>
  );
};
