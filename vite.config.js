import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        historyApiFallback: true
      }
    ,
    base: '/',
    plugins:[
        tailwindcss(),
    ]
})