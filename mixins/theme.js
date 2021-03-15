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
            return this.validValues.includes(value) ? value : null;
        },
        setTheme: function (newValue) {
            /**
             * Set the theme as passed by the user.
             * 
             * The theme has to be a valid value, else it will be rejected.
             */
            if (!newValue) {
                throw "Needs to be a valid value!"
                return
            }

            // If value is valid
            newValue = newValue.toLowerCase()
            if (!this.validValues.includes(newValue)) {
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
            return this.getTheme();
        },
        isDarkTheme: function () {
            /**
             * Check if the current saved theme is the dark theme
             * or not.
             * 
             * WARNING: This method is only to be called when the theme is
             * valid.
             */
            return this.getTheme().toLowerCase() == "dark"
        },
        getDeviceTheme: function () {
            /**
             * Get the users device theme. We need to check if the device
             * theme is dark or light by using CSS.
             */
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            return darkThemeMq.matches ? "dark" : "light";
        },
        isDeviceDarkTheme: function () {
            /**
             * Check if the device has currently set the theme to dark
             * or light.
             */
            return this.getDeviceTheme().toLowerCase() == "dark";
        }
    }
}