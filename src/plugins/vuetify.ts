import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const myCustomLightTheme = {
    dark: true,
    colors: {
        grey_100: '#333238',
        grey_200: '#29282d',
        grey_300: '#434248',

        white_100: '#ffffff',

        green_100: '#156b39',

        blue_100: '#1f75cb',
    },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
    },
    defaults: {
        VTextField: {
            variant: 'outlined',
            density: 'compact',
        },
        VAutocomplete: {
            variant: 'outlined',
            density: 'compact',
        },
        VBtn: {
            // variant: 'outlined',
            density: 'comfortable',
        },
    },
});
