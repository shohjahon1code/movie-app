// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
type Data = {
  message?: string;
  products?: Stripe.Response<Stripe.ApiList<Stripe.Product>>;
};

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  if (method === "POST") {
    try {
      const { email, user_id } = req.body;
      await stripe.customers.create({ email, metadata: { user_id: user_id } });
      return res.status(200).json({ message: "success" });
    } catch (error) {
      const result = error as Error;
      return res.status(400).json({ message: result.message });
    }
  } else {
    return res.status(400).json({ message: "Method not alllowed" });
  }
}
