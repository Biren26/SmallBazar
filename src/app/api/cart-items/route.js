import { addToCart, getCart } from '../store-data';

export function GET() {
  return Response.json(getCart());
}

export async function POST(request) {
  const { productId, quantity } = await request.json();
  return Response.json(addToCart(productId, quantity));
}
