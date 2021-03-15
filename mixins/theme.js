export const theme = {
    data() {
        return {
            themeKey: "blogTheme",
            validValues: ["light", "dark"]
        }
    },
    methods: {
        getTheme: function () {
            /**
             * Get the theme based on the key. We will just try to fetch the
             * theme from the localstorage. If it is not present, we will
             * return null.
             */
            const value = localStorage.getItem(this.themeKey);

            // Check if value is valid
            if (!value) return value

            // If the value is valid, i:e either light or dark, otherwise return
            // null.
            return value.toLowerCase() in this.validValues ? value : null;
        },
        setTheme: function (newValue) {
            /**
             * Set the theme as passed by the user.
             * 
             * The theme has to be a valid value, else it will be rejected.
             */
            newValue = newValue.toLowerCase()
            if (!(newValue in this.validValues)) {
                throw `Value needs to be either of ${this.validValues}, got ${newValue}`;
                return
            }

            // Else set the theme
            localStorage.setItem(this.themeKey, newValue)
        },
        isThemeSaved: function () {
            /**
             * Check if a valid theme is saved in the localStorage or not.
             * 
             * We just need to check if the saved value is null or not.
             */
            return !this.getTheme();
        }
    }
}