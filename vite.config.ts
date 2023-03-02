import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        vuetify({
            autoImport: true,
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/global.scss";`,
            },
        },
    },
    server: {
        port: 3000,
    },
});
