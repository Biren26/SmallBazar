'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { HomePage } from '../store-pages/home/HomePage';
import { CheckoutPage } from '../store-pages/checkout/CheckoutPage';
import { OrdersPage } from '../store-pages/orders/OrdersPage';
import { TrackingPage } from '../store-pages/TrackingPage';

export function StorePage({ page }) {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (page === 'checkout') {
    return <CheckoutPage cart={cart} loadCart={loadCart} />;
  }

  if (page === 'orders') {
    return <OrdersPage cart={cart} />;
  }

  if (page === 'tracking') {
    return <TrackingPage cart={cart} />;
  }

  return <HomePage cart={cart} loadCart={loadCart} />;
}
