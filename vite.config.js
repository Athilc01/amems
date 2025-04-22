import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { VitePWA } from 'vite-plugin-pwa';
dotenv.config();

export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
        name: 'my-react-app',
        short_name: 'ReactApp',
        description: 'A sample PWA application built with React and Vite.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // Optional: additional configurations
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/your-api\.com\/.*$/, // Adjust this to your API
      //       handler: 'NetworkFirst',
      //       options: {
      //         cacheName: 'api-cache',
      //       },
      //     },
      //   ],
      // },
    })
  ],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3080, // Default to 3080 if VITE_PORT is not set
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable sourcemaps in production
    minify: 'esbuild', // You can use 'terser' for more options
    rollupOptions: {
      input: 'index.html', // Specify the input file
    },
  },
  
});
