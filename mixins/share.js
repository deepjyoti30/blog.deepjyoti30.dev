export const share = {
    data() {
        return {
            selfBase: 'https://blog.deepjyoti30.dev/',
        }
    },
    methods: {
        buildShareUrl: function (slug) {
            /**
             * Build the share URL that can be shared with the users
             * when they click the share buttons.
             */
            return `${this.selfBase}${slug}`
        }
    }
}