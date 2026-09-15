import { products } from '../store-data';

export function GET() {
  return Response.json(products);
}
