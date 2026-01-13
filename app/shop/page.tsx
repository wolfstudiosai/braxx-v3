"use client";

import React from 'react';
import { Configurator } from '../../components/Configurator';
import { BikeOutline } from '../../components/BikeOutline';
import { Marquee } from '../../components/Marquee';
import { ChevronRight, ShieldCheck, Zap, Activity, Cpu, Layers, Disc, Wind, ArrowRight, Twitter, Facebook, Share2 } from 'lucide-react';
import { useCart } from '../../components/CartContext';

export default function ShopPage() {
  const { addToCart } = useCart();
  
  const productData = {
    id: 101,
    name: 'BRAXX GT',
    price: 4200,
    category: 'GT',
    image: 'https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/braxx-supreme.png',
    description: 'High-performance urban tactical e-moto.'
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-105">
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727e3354bb0ce9c4f82873104690465241f89360&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#d4d4d4]"></div>
        <div className="relative z-10 h-full flex flex-col justify-start px-8 lg:px-24 pt-32 lg:pt-40 text-white">
          <span className="text-[#e2ff4a] text-[10px] font-black tracking-[0.6em] uppercase mb-4">Operational Prototype</span>
          <h1 className="text-white text-5xl lg:text-[10rem] font-light italic tracking-tighter uppercase leading-none whitespace-nowrap">GT SERIES</h1>
        </div>
      </section>

      <Marquee text="LIMITED TIME: 20% OFF ALL ACCESSORIES WITH GT PRE-ORDER // FREE STRATEGIC GEAR BUNDLE" className="border-none opacity-80" />

      <div className="max-w-[1600px] mx-auto px-8 lg:px-24 py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                  <ShieldCheck size={12} /> Military Grade Components
                </div>
                <div className="flex items-center gap-4 text-black/30">
                  <button className="hover:text-black transition-colors"><Twitter size={14} /></button>
                  <button className="hover:text-black transition-colors"><Facebook size={14} /></button>
                  <button className="hover:text-black transition-colors"><Share2 size={14} /></button>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center bg-white/40 rounded-[4rem] border border-white/60 shadow-xl overflow-hidden group">
               <BikeOutline className="scale-125 transition-transform duration-1000 group-hover:scale-[1.3]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Zap size={20} />, label: 'POWER', val: '12KW PEAK', sub: 'High-Torque Performance' },
                { icon: <Activity size={20} />, label: 'RANGE', val: '50 MILES', sub: 'Optimized Battery Life' },
                { icon: <ChevronRight size={20} />, label: 'TOP SPEED', val: '60 MPH', sub: 'Urban Dominance' }
              ].map((item, i) => (
                <div key={i} className="bg-white/40 p-8 rounded-[2rem] border border-white/60 space-y-4">
                  <div className="text-black/40">{item.icon}</div>
                  <div>
                    <span className="block text-[8px] font-black text-black/30 uppercase tracking-[0.2em] mb-1">{item.label}</span>
                    <span className="block text-xl font-black italic text-black">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[400px] sticky top-32">
            <Configurator allowedModels={['GT']} onAddToCart={() => addToCart(productData)} />
          </div>
        </div>
      </div>
    </div>
  );
}