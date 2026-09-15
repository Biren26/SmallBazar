import { removeFromCart, updateCartItem } from '../../store-data';

export async function PUT(request, { params }) {
  const { deliveryOptionId } = await request.json();
  const { productId } = await params;
  return Response.json(updateCartItem(productId, { deliveryOptionId }));
}

export async function DELETE(_request, { params }) {
  const { productId } = await params;
  return Response.json(removeFromCart(productId));
}
