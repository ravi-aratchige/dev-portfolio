// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};
