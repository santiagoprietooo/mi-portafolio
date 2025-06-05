// tailwind.config.js
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
        fontFamily: {
            Designer: ['Designer'],
            CocaCola: ['CocaCola'],
            EduVICWANT: ['EduVICWANT'],
            JurnalNote: ['JurnalNote'],
        }
        },
    },
    plugins: [],
};