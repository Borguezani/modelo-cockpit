import "./bootstrap";

import.meta.glob(["../images/**", "../fonts/**"]);

import { createApp, h } from "vue";
import { createInertiaApp, usePage } from "@inertiajs/vue3";
import { ZiggyVue } from "ziggy";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import vuetify from "./plugins/vuetify";
import VueMain from "./Layouts/VueMain.vue";

createInertiaApp({
   title: (title) => {
        const defaultTitle = usePage().props.appName || 'Cockpit';
        return title ? `${title} - ${defaultTitle}` : defaultTitle;
    },
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
            { eager: true }
        )

        page.then((module) => {
            module.default.layout = VueMain
        }).catch((error) => {
            console.log(error)
        })

        return page
    },
    setup({ el, App, props, plugin }) {

        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetify)
            // .use(VueTheMask)
            .mount(el)

    },
    progress: {
        color: '#000',
        showSpinner: false,
      },
})
