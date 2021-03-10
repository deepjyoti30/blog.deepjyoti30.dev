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
                },
                skyblue: {
                    DEFAULT: '#118AB2',
                },
                darkblue: {
                    DEFAULT: '#073B4C',
                    dark: '#79D5F3',
                },
            },
        },
    },
    darkMode: 'class',
    variants: {},
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
