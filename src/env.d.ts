/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly STRIPE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
