import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shaarstudio.com',
  output: 'static',
  build: {
    assets: '_assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
