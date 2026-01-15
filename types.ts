
// ViewState enum defines the navigation states of the application
export enum ViewState {
  HOME = 'HOME',
  SHOP = 'SHOP',
  BLOG = 'BLOG',
  CART = 'CART',
  STUDIO = 'STUDIO',
  CONTACT = 'CONTACT'
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  cartCount: number;
  total: number;
}

// API Product Types
export interface ApiProductSpec {
  key: string;
  value: string;
}

export interface ApiSpecGroup {
  group: string;
  specs: ApiProductSpec[];
}

export interface ApiProductVariant {
  id: string;
  name: string;
  images: string[];
  inventory: number;
  sellingPrice: number;
  priceCurrency: string;
}

export interface ApiProduct {
  uuid: string;
  slug: string;
  title: string;
  description: string;
  specifications: ApiSpecGroup[];
  seo: {
    title: string;
    description: string;
  };
  collections: string[];
  categories: string[];
  variants: ApiProductVariant[];
}
