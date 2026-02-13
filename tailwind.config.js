/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {

      keyframes: {
        floatBlob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
      },

      animation: {
        blob: "floatBlob 12s ease-in-out infinite",
      },

    },
  },
  
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],

 
}

