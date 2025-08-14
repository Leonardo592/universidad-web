import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env': {}, 
    },
    resolve: {
        alias: {
            '@': '/src', 
        },
    },
    server: {
        port: 3000,
        open: true,
        host: true, 
    },
});
