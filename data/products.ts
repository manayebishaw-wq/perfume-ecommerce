export const products = [
  {
    id: 1,
    name: 'Velvet Bloom',
    category: 'Floral',
    price: 128,
    size: '50ml',
    rating: 4.9,
    reviews: 184,
    description: 'A luminous floral bouquet with rose petals, peony, and soft amber warmth.',
    accent: '#c9857a',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Noir Elixir',
    category: 'Woody',
    price: 146,
    size: '75ml',
    rating: 4.8,
    reviews: 132,
    description: 'Dark woods and saffron meet sensual vanilla for a rich evening signature.',
    accent: '#5f4b4a',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Citrus Muse',
    category: 'Fresh',
    price: 98,
    size: '30ml',
    rating: 4.7,
    reviews: 214,
    description: 'Bright bergamot, neroli, and white musk deliver a clean, uplifting finish.',
    accent: '#d2aa67',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Amber Reverie',
    category: 'Oriental',
    price: 159,
    size: '100ml',
    rating: 5.0,
    reviews: 99,
    description: 'Golden amber, tonka bean, and soft sandalwood layered into a lasting trail.',
    accent: '#a56b3c',
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
  },
];

export type Product = (typeof products)[number];
