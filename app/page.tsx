
import React from 'react';
import { Configurator } from '../components/Configurator';
import { BikeOutline } from '../components/BikeOutline';
import { Marquee } from '../components/Marquee';
import { ProductRow } from '../components/ProductRow';
import { VideoSlideshow } from '../components/VideoSlideshow';
import { ParallaxSection } from '../components/ParallaxSection';
import { BlogSection } from '../components/BlogSection';
import { useCart } from '../components/CartContext';
import { Link } from '../components/Link';

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <>
      <section className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none"></div>
        
        <div className="relative w-full h-full max-w-[1600px] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-32">
          <div className="relative z-20 w-full lg:w-96 shrink-0 order-2 lg:order-1 mt-12 lg:mt-0 animate-in slide-in-from-left duration-700">
            <Configurator onAddToCart={() => addToCart({ id: 99, name: 'BRAXX GT', price: 4200, category: 'GT', image: '', description: 'Core Unit' })} />
          </div>
          
          <div className="relative flex-1 h-full flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-5xl transform scale-110 lg:scale-[1.6] translate-y-12 select-none pointer-events-none transition-all duration-1000 animate-in zoom-in-95">
              <BikeOutline className="text-black opacity-80" />
              <div className="absolute -bottom-10 left-[10%] right-[10%] h-12 bg-black/10 blur-[60px] rounded-[100%] z-0 scale-y-50"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] font-black tracking-[0.5em] uppercase opacity-20 pointer-events-none">
          <span>Speed</span>
          <div className="w-12 h-px bg-black"></div>
          <span>Precision</span>
          <div className="w-12 h-px bg-black"></div>
          <span>Silence</span>
        </div>
      </section>

      <Marquee className="border-t-0" />
      
      <Link href="/shop" className="block group">
        <ParallaxSection 
          title="UNRIVALED PERFORMANCE" 
          subtitle="(learn more)" 
          image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop"
        />
      </Link>
      
      <ProductRow />
      <VideoSlideshow />
      <BlogSection />
    </>
  );
}
