import { Stripe } from "stripe";
export const stripe = new Stripe(import.meta.env.STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

export interface ProductMetadata {
  readonly extra_product?: string;
  readonly extra_description?: string;
  readonly features: string;
}
