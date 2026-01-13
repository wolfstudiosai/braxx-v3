
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
