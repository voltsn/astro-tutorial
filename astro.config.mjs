// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://spiffy-douhua-4040d7.netlify.app/",
  integrations: [preact()]
});