/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#EFEFEF',
        'gray-gob': '#e5e5e5',
        'white': '#ffffff',
        'custom-red': '#9C3620',     // Tu rojo principal
        'custom-yellow': '#FFFF2D',
        'custom-red-darker': '#7D2C1A', // CORREGIDO: Un rojo más oscuro que #9C3620
        // Opcional: si necesitas un rojo más claro para el borde del input de búsqueda en el nav
        'custom-red-lighter': '#B55C49', // Ejemplo de un rojo más claro
      },
      // Si vas a usar opacidades como bg-custom-red/5, y tu versión de Tailwind es anterior a la 3.1
      // o prefieres tenerlas explícitas, puedes definirlas aquí:
      // opacity: {
      //   '5': '0.05',
      //   '10': '0.10',
      // }
    },
  },
  plugins: [],
};