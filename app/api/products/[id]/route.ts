import { products } from '@/data/products';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }

  return Response.json(product);
}
