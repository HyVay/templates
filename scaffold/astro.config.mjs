import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static site (SSG), zero client JS unless a component adds a <script>.
// base is '/' for dev + publish; the server-side preview build sets
// ASTRO_BASE=/api/studio/preview/<id>/ so asset URLs resolve there.
export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE || '/',
  integrations: [tailwind()],
  server: { host: true },
});
