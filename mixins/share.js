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
        },
        copyOldSchool: function (el) {
            /**
             * Copy by creating a text box and selecting and copying
             */
            // Select the element first
            el.select()

            try {
                const status = document.execCommand('copy')
                return status
            } catch (err) {
                console.log('Fallback failed as well :/', err)
            }
        },
        copyUrl: function (url, el) {
            /**
             * Copy the url of the post to clipboard
             *
             * We have to ways to copy, one would be by using the
             * new API which might now work all the time, thus we
             * need a fallback.
             */
            if (!navigator.clipboard) {
                // Call the fallback
                return this.copyOldSchool(el)
            }

            return navigator.clipboard.writeText(url).then(() => {
                return true
            }, () => {
                return false
            })
        },
        showNativeShare: async function (title, description, slug) {
            /**
             * Handle the share menu
             *
             * Based on the share menu support we will work
             * distinctly. If share menu is not support, we will
             * just copy the url to the clipboard.
             *
             * Else we will invoke the share menu.
             */
            await navigator.share({
                title: title,
                url: this.buildShareUrl(slug),
                text: description,
            })
        },
        isNativePresent: function () {
            /**
             * Check if the native share menu is present or not.
             */
            return Boolean(navigator.share);
        }
    },
}
