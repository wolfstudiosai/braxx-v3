import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';
import HomePage from './app/page';
import ShopPage from './app/shop/page';
import BlogPage from './app/blog/page';
import CartPage from './app/cart/page';
import StudioPage from './app/studio/page';
import ContactPage from './app/contact/page';

// Simple Router implementation to simulate Next.js behavior in this environment
const Router = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/shop': return <ShopPage />;
      case '/blog': return <BlogPage />;
      case '/cart': return <CartPage />;
      case '/studio': return <StudioPage />;
      case '/contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return <RootLayout>{renderPage()}</RootLayout>;
};

const root = createRoot(document.getElementById('root')!);
root.render(<Router />);