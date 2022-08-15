/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#008FA6',
                'secondary': '#F2C51',
                'solid-white': '#FFFFFF',
                'solid-black': '#000000',
                'gray': '#706F6F',
                'light-gray': '#EDEDED'
            }
        },
    },
    plugins: [],
}
