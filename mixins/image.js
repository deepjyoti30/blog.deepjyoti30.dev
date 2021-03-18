export const image = {
    data() {
        return {
            imgPrefix: "https://res.cloudinary.com/deepjyoti30/image/fetch/f_auto,q_50"
        }
    },
    methods: {
        getImgUrl: function (URL, width, height = null) {
            /**
             * Get the cloudinary URL for the passed image URL.
             * 
             * We will see if the height and width is passed and
             * based on that generate the URL.
             */
            const imgUrl = this.imgPrefix + `,w_${width}`

            if (height) imgUrl += `,h_${height}`

            // Finally add the URL
            imgUrl += `/${URL}`

            return imgUrl
        }
    }
}