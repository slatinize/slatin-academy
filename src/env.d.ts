/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Env {
  DB: D1Database;
  STRIPE_SECRET_KEY: string;
  STRIPE_PRICE_TIER1: string;
  STRIPE_PRICE_TIER2: string;
  SITE_URL: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
