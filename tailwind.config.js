module.exports = {
    theme: {
        extend: {
            colors: {
                redpink: {
                    DEFAULT: '#EF476F',
                },
                customyellow: {
                    DEFAULT: '#FFD166',
                },
                customgreen: {
                    DEFAULT: '#06D6A0',
                    600: '#DDFEF5',
                },
                skyblue: {
                    DEFAULT: '#118AB2',
                },
                darkblue: {
                    DEFAULT: '#073B4C',
                    300: '#BFEBF9',
                    500: '#62CDF0',
                },
                darklow: {
                    DEFAULT: '#1A1A1A'
                },
                darkhigh: {
                    DEFAULT: "#121212"
                }
            },
        },
    },
    darkMode: 'class',
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },
}
