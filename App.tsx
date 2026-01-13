
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Configurator } from './components/Configurator';
import { ChatAssistant } from './components/ChatAssistant';
import { ProductRow } from './components/ProductRow';
import { ParallaxSection } from './components/ParallaxSection';
import { BlogSection } from './components/BlogSection';
import { Marquee } from './components/Marquee';
import { VideoSlideshow } from './components/VideoSlideshow';
import { BikeOutline } from './components/BikeOutline';
import { Footer } from './components/Footer';
import { ViewState, Product, CartItem } from './types';
import { BlogPage } from './components/BlogPage';
import { ProductPage } from './components/ProductPage';
import { ContactPage } from './components/ContactPage';
import { StudioPage } from './components/StudioPage';
import { CartPage } from './components/CartPage';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const addToCart = (product: Product | any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const renderView = () => {
    switch (view) {
      case ViewState.SHOP:
        return <ProductPage setView={setView} addToCart={addToCart} />;
      case ViewState.BLOG:
        // Fixed line 101: Passing setView to BlogPage to resolve type error and enable navigation
        return <BlogPage setView={setView} />;
      case ViewState.CONTACT:
        return <ContactPage />;
      case ViewState.STUDIO:
        return <StudioPage addToCart={addToCart} />;
      case ViewState.CART:
        return <CartPage cart={cart} setView={setView} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />;
      default:
        return (
          <>
            <main className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none"></div>
              
              <div className="relative w-full h-full max-w-[1600px] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-32">
                <div className="relative z-20 w-full lg:w-96 shrink-0 order-2 lg:order-1 mt-12 lg:mt-0 animate-in slide-in-from-left duration-700">
                  <Configurator onAddToCart={() => addToCart({ id: 99, name: 'BRAXX GT', price: 4200, category: 'GT', image: '', description: '' })} />
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
            </main>

            <Marquee className="border-t-0" />
            <div onClick={() => setView(ViewState.SHOP)} className="cursor-pointer group">
              <ParallaxSection 
                title="UNRIVALED PERFORMANCE" 
                subtitle="(learn more)" 
                image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2000&auto=format&fit=crop"
              />
            </div>
            <ProductRow setView={setView} />
            <VideoSlideshow />
            <BlogSection setView={setView} />
          </>
        );
    }
  };

  return (
    <div className="bg-[#d4d4d4] selection:bg-black selection:text-white overflow-x-hidden min-h-screen">
      <Navbar setView={setView} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      
      {renderView()}

      <Footer setView={setView} />

      {/* Global Noise Layer */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[9999]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100" height="100" filter="url(#noise)" />
        </svg>
      </div>

      <ChatAssistant />
    </div>
  );
};

export default App;
