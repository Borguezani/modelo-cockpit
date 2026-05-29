import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import { en, pt } from "vuetify/locale";

export const themeDark = {
    dark: true,
    colors: {
        background: "#25293c",
        surface: "#233045",
        "header-background": "#10192d",
        "surface-variant": "#343C58",
        primary: "#8367F4",
        secondary: "#AEAFC1",
        "on-background": "#FFFFFF",
        "on-surface": "#FFFFFF",
        "on-primary": "#FFFFFF",
        "on-secondary": "#101323",
        error: "#FF525299",
        info: "#AEAFC1",
        success: "#00E676",
        warning: "#FFC107",
    },
};

const vuetify = createVuetify({
    defaults: {
        VTextField: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },
        VAutocomplete: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },
        VFileInput: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },
        VSelect: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },
        VTextarea: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },
        VCard: {
            variant: "flat",
            color: "surface",
            elevation: 4,
            class: "text-white",
            style: "border-radius: 16px;",
        },
        VNumberInput: {
            variant: "outlined",
            density: "compact",
            class: "bold-label",
        },

    },
    locale: {
        locale: "pt",
        fallback: "en",
        messages: { pt, en },
        silentTranslationWarn: true,
    },
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    ssr: true,
    theme: {
        defaultTheme: "dark",
        themes: {
            dark: themeDark,
            light: themeDark,
        },
    },
});

export default vuetify;

