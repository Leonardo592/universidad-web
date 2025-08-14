/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- PALETA ANTIGUA (NO TOCAR) ---
        'custom-gray': '#EFEFEF',
        'gray-gob': '#e5e5e5',
        'white': '#ffffff',
        'custom-red': '#9C3620',
        'custom-yellow': '#FFFF2D',
        'custom-red-darker': '#7D2C1A',
        'custom-red-lighter': '#B55C49',

        // --- PALETA PROFESIONAL UANCV (CORREGIDA Y CON IDENTIDAD) ---
        'uancv-maroon-dark': '#2E1A1A',      // NUEVO: Fondo oscuro principal. Un marrón rojizo muy oscuro.
        'uancv-red': '#AF201D',              // Acento de Acción: Botones, links activos. El rojo del logo.
        'uancv-blue-dark': '#1A2A45',        // Color Secundario: Para textos o elementos de contraste.
        'uancv-bg': '#F7F9FC',               // Fondo Claro: Para el cuerpo de las páginas.
        'uancv-text-secondary': '#5C6F8A',   // Texto Secundario: Párrafos sobre fondo claro.
        'uancv-border': '#E2E8F0',           // Bordes/Divisores: Sobre fondo claro.
        'uancv-gold': '#BB9E64',             // Acento Dorado: Para íconos, etiquetas especiales (uso sutil).
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};