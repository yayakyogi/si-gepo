import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(env.PORT),
      watch: {
        usePolling: true,
      },
    },
    plugins: [react(), tsconfigPaths(), VitePWA({ registerType: 'autoUpdate' })],
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },
    css: {
      modules: {
        generateScopedName: 'nimo-v2-[local]-[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "src/styles/vars.scss";`,
        },
      },
    },
  };
});
