
import React from 'react';
import { ViewState, Product } from '../types';
import { Configurator } from './Configurator';
import { BikeOutline } from './BikeOutline';
import { Marquee } from './Marquee';
import { ChevronRight, ShieldCheck, Zap, Activity, Cpu, Layers, Disc, Wind, ArrowRight, Twitter, Facebook, Share2 } from 'lucide-react';

interface ProductPageProps {
  setView: (view: ViewState) => void;
  addToCart: (product: any) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ setView, addToCart }) => {
  const productData = {
    id: 101,
    name: 'BRAXX GT',
    price: 4200,
    category: 'GT',
    image: 'https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/braxx-supreme.png',
    description: 'High-performance urban tactical e-moto.'
  };

  return (
    <div className="bg-[#d4d4d4] min-h-screen">
      {/* FULL WIDTH HERO VIDEO */}
      <section className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-105"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727e3354bb0ce9c4f82873104690465241f89360&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#d4d4d4]"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-start px-8 lg:px-24 pt-32 lg:pt-40">
          <span className="text-[#e2ff4a] text-[10px] font-black tracking-[0.6em] uppercase mb-4 animate-in fade-in slide-in-from-top-4 duration-700">Operational Prototype</span>
          <h1 className="text-white text-5xl lg:text-[10rem] font-light italic tracking-tighter uppercase leading-none animate-in fade-in slide-in-from-left-8 duration-1000 whitespace-nowrap">
            GT SERIES
          </h1>
        </div>
      </section>

      {/* DEAL TICKER */}
      <Marquee text="LIMITED TIME: 20% OFF ALL ACCESSORIES WITH GT PRE-ORDER // FREE STRATEGIC GEAR BUNDLE WITH FLEET ENLISTMENT // LIMITED SLOTS REMAINING FOR LA HUB" className="border-none opacity-80" />

      {/* TOP SECTION: MAIN CONFIGURATOR */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-24 py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Visuals Area */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                  <ShieldCheck size={12} /> Military Grade Components
                </div>
                {/* Sharing Buttons */}
                <div className="flex items-center gap-4 text-black/30">
                  <button className="hover:text-black transition-colors"><Twitter size={14} /></button>
                  <button className="hover:text-black transition-colors"><Facebook size={14} /></button>
                  <button className="hover:text-black transition-colors"><Share2 size={14} /></button>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center bg-white/40 rounded-[4rem] border border-white/60 shadow-xl overflow-hidden group">
               <BikeOutline className="scale-125 transition-transform duration-1000 group-hover:scale-[1.3]" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
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
                    <span className="block text-[9px] font-bold text-black/50 uppercase tracking-widest">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Configurator Sidebar - restricted to GT only */}
          <div className="w-full lg:w-[400px] sticky top-32">
            <Configurator allowedModels={['GT']} onAddToCart={() => addToCart(productData)} />
          </div>
        </div>
      </div>

      {/* SECTION 2: DETAILED SPECS MATRIX (MOVED UP) */}
      <section className="bg-white py-32 px-8 lg:px-24 mb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-black/30 text-[10px] font-black uppercase tracking-[0.5em]">The Blueprint</span>
                <h2 className="text-black text-6xl font-black italic tracking-tighter uppercase leading-none">
                  TACTICAL <br /> MATRIX
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Nominal Output", val: "6,000 Watts" },
                  { label: "Max Torque", val: "250 N.m" },
                  { label: "Wheelbase", val: "50.4 Inches" },
                  { label: "Ground Clearance", val: "10.6 Inches" },
                  { label: "Curb Weight", val: "128 Lbs" },
                  { label: "Charge Type", val: "Standard 110V Outlet" }
                ].map((spec, i) => (
                  <div key={i} className="flex items-end justify-between border-b border-black/10 pb-4 group">
                    <span className="text-[10px] font-black text-black/30 uppercase tracking-widest transition-colors group-hover:text-black">{spec.label}</span>
                    <span className="text-sm font-black italic uppercase text-black">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <p className="text-[11px] font-bold text-black/40 uppercase leading-relaxed max-w-sm">
                  *All specifications are verified in standard operational conditions. Performance may vary based on terrain and pilot load.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-black rounded-[4rem] blur-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative aspect-[4/5] bg-gray-50 rounded-[4rem] border border-black/5 overflow-hidden flex items-center justify-center p-12">
                 <img 
                   src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/braxx-supreme.png" 
                   alt="Top View" 
                   className="w-full h-auto object-contain transform rotate-[-25deg] group-hover:rotate-0 transition-transform duration-1000 scale-125 group-hover:scale-100"
                 />
                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-[0.5em] text-black/20 uppercase whitespace-nowrap">
                   Strategic Build // Type-01
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROPRIETARY TECH GRID - NO ROUNDED CORNERS */}
      <section className="bg-black py-32 px-8 lg:px-24 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 space-y-4">
            <span className="text-[#e2ff4a] text-[10px] font-black uppercase tracking-[0.5em]">The Architecture</span>
            <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              ENGINEERED <br /> FOR <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>SURVIVAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                icon: <Cpu className="text-[#e2ff4a]" />, 
                title: "V-CORE CONTROLLER", 
                desc: "Proprietary vector-field processing for instant torque response and thermal efficiency.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: <Layers className="text-[#e2ff4a]" />, 
                title: "RIPSTOP CHASSIS", 
                desc: "T6 aerospace-grade aluminum alloy frame with reinforced stress points for high-impact landings.",
                img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: <Disc className="text-[#e2ff4a]" />, 
                title: "RECON BRAKING", 
                desc: "Oversized 240mm discs with sintered pads for zero-fade performance in extreme heat.",
                img: "https://images.unsplash.com/photo-1485965120184-a220f721d03e?q=80&w=800&auto=format&fit=crop" 
              },
              { 
                icon: <Wind className="text-[#e2ff4a]" />, 
                title: "SILENT DRIVE", 
                desc: "Acoustically tuned drive chain with self-lubricating tech to maintain operational stealth.",
                img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop" 
              }
            ].map((tech, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-[3rem] p-8 flex flex-col h-[450px] overflow-hidden transition-all hover:bg-white/10 hover:border-white/20">
                <div className="relative z-10 mb-8">{tech.icon}</div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-white text-xl font-black italic tracking-tight mb-4">{tech.title}</h3>
                  <p className="text-white/40 text-[11px] font-bold leading-relaxed uppercase tracking-wider">{tech.desc}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${tech.img})` }}></div>
                <div className="relative z-10 mt-auto pt-8 border-t border-white/5 flex items-center justify-between text-[#e2ff4a] text-[9px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                  Deep Specs <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CINEMATIC FULL WIDTH ACTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558980331-0672ff794669?q=80&w=2400&auto=format&fit=crop" 
            alt="Action" 
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-8">
          <span className="text-[#e2ff4a] text-[12px] font-black tracking-[0.8em] uppercase block">Urban Operations</span>
          <h2 className="text-white text-7xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-12">
            MASTER <br /> THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>SILENCE</span>
          </h2>
          <button className="mx-auto bg-white text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#e2ff4a] transition-all transform hover:scale-110 shadow-2xl">
            Watch Operational Brief
          </button>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
};
