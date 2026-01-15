"use client";

import React from 'react';
import { StudioPage as StudioComponent } from '@/components/StudioPage';
import { useCart } from '@/components/CartContext';

export default function StudioPage() {
  const { addToCart } = useCart();
  return <StudioComponent addToCart={addToCart} />;
}