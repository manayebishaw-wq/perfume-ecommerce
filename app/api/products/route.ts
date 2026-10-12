export async function GET() {
  return Response.json({
    message: 'Perfume catalog API ready',
    products: [
      { id: 1, name: 'Velvet Bloom', price: 128 },
      { id: 2, name: 'Noir Elixir', price: 146 },
      { id: 3, name: 'Citrus Muse', price: 98 },
      { id: 4, name: 'Amber Reverie', price: 159 },
    ],
  });
}
