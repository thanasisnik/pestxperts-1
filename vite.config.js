import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    publicDir: 'public',
    server: {
        fs: {
            strict: false // Επιτρέπει access σε αρχεία έξω από root
          },
        historyApiFallback: true
      }
    ,
    base: '/',
    plugins:[
        tailwindcss(),
    ]
})