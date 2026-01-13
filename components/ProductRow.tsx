
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Marquee } from './Marquee';
import { Link } from './Link';

const BIKE_IMAGE = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/braxx-supreme.png";

const BIKE_MODELS = [
  { id: 'gt-s', name: 'BRAXX GT: S', desc: 'Premium metallic finish • Standard motor' },
  { id: 'gt-b', name: 'BRAXX GT: B', desc: 'Sleek high-gloss coating • Enhanced motor' },
  { id: 'gtpro-b', name: 'BRAXX GT PRO: B', desc: 'Non-reflective finish • Performance motor' },
  { id: 'gtpro-r', name: 'BRAXX GT PRO: R', desc: 'Bold satin red finish • Premium motor' }
];

export const ProductRow: React.FC = () => {
  return (
    <section className="bg-[#d4d4d4] w-full border-t border-black/10">
      <Marquee />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {BIKE_MODELS.map((bike, index) => (
          <Link 
            href="/shop"
            key={bike.id} 
            className={`group cursor-pointer p-12 flex flex-col min-h-[500px] transition-all duration-500 relative overflow-hidden bg-transparent
              ${index !== 3 ? 'lg:border-r' : ''} 
              md:border-b lg:border-b-0 border-black/10
              hover:bg-black/5
            `}
          >
            <div className="absolute top-8 right-8 p-3 bg-black text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <ShoppingCart size={16} />
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <img 
                src={BIKE_IMAGE} 
                alt={bike.name} 
                className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)]"
              />
            </div>
            
            <div className="mt-8 space-y-1 relative z-10 text-center">
              <h3 className="text-xl font-black italic tracking-tighter text-black uppercase">{bike.name}</h3>
              <p className="text-[9px] text-black/40 font-bold uppercase tracking-widest">{bike.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
