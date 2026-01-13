import React from 'react';
import { Product, ViewState } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
  title?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart, title = "Featured Gear" }) => {
  return (
    <section className="py-20 bg-braxx-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wide border-l-4 border-braxx-red pl-4">
            {title}
          </h2>
          <button className="hidden md:block text-braxx-red font-bold uppercase tracking-widest text-xs hover:text-white transition">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[3/4] w-full overflow-hidden bg-braxx-gray relative">
                 {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-white text-braxx-black text-xs font-bold px-2 py-1 uppercase tracking-widest">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                        className="w-full bg-braxx-red text-white font-bold uppercase py-3 text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-red-700"
                    >
                        <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display tracking-wide">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{product.category}</p>
                </div>
                <p className="text-lg font-bold text-braxx-red">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="text-braxx-red font-bold uppercase tracking-widest text-sm hover:text-white transition">
                View All Products
            </button>
        </div>
      </div>
    </section>
  );
};
