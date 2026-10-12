import { NextResponse } from 'next/server';
import { products } from '@/data/products';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    if (!items.length) {
      return NextResponse.json({ error: 'No items in cart.' }, { status: 400 });
    }

    const lineItems = items.map((item: { id: number; quantity?: number }) => {
      const product = products.find((entry) => entry.id === item.id);

      if (!product) {
        throw new Error(`Product ${item.id} not found`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: item.quantity ?? 1,
      };
    });

    const origin = new URL(req.url).origin;

    if (!stripe) {
      return NextResponse.json({
        url: `${origin}/checkout/success?demo=1`,
        demo: true,
        message: 'Stripe is not configured. Demo checkout enabled.',
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?cancelled=1`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'DE', 'FR', 'AE'],
      },
      billing_address_collection: 'required',
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Unable to create checkout session.' }, { status: 500 });
  }
}
