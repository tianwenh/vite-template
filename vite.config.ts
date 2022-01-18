import { defineConfig } from 'vite';
import { mdx } from '@tianwenh/vite-plugin-ssgpage';

export default defineConfig({
  plugins: [mdx()],
});
