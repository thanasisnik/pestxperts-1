import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    publicDir: 'public',
    server: {
        historyApiFallback: true
      }
    ,
    base: '/',
    plugins:[
        tailwindcss(),
    ]
})