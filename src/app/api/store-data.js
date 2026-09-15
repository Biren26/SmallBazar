import products from '../../../starting-code/backend/products.json';
import initialCart from '../../../starting-code/backend/cart.json';
import deliveryOptions from '../../../starting-code/backend/deliveryOptions.json';
import initialOrders from '../../../starting-code/backend/orders.json';

export { products, deliveryOptions, initialOrders };

let cart = initialCart.map((item) => ({ ...item }));

export function getCart() {
  return cart.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.productId),
  }));
}

export function addToCart(productId, quantity) {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity, deliveryOptionId: '1' });
  }

  return getCart();
}

export function updateCartItem(productId, updates) {
  const item = cart.find((cartItem) => cartItem.productId === productId);

  if (item) {
    Object.assign(item, updates);
  }

  return getCart();
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  return getCart();
}
