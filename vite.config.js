import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    // Development server configuration
    server: {
      port: 5173,
      host: true,
      open: true,
      cors: true,
    },

    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProduction,
      minify: isProduction ? 'esbuild' : false,

      // Chunk splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['lucide-react'],
          },
        },
      },

      // Build performance
      chunkSizeWarningLimit: 1000,

      // Asset optimization
      assetsInlineLimit: 4096,
    },

    // Path resolution
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/Components'),
        '@pages': resolve(__dirname, './src/Pages'),
        '@assets': resolve(__dirname, './src/assets'),
      },
    },

    // CSS configuration
    css: {
      devSourcemap: !isProduction,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },

    // Environment variables
    envPrefix: 'VITE_',

    // Preview configuration
    preview: {
      port: 4173,
      host: true,
      cors: true,
    },

    // Optimization
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'lucide-react',
      ],
    },

    // Define global constants
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
  };
});
