import "./bootstrap";

import.meta.glob(["../images/**", "../fonts/**"]);

import { createApp, h } from "vue";
import { createInertiaApp, usePage } from "@inertiajs/vue3";
import { ZiggyVue } from "ziggy";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import vuetify from "./plugins/vuetify";

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
            if (name.startsWith("Auth/")) {
                module.default.layout = AuthLayout
            }  else if (name.startsWith("Public/")) {
                module.default.layout = LayoutPublic
            } else if (name.startsWith("Error/")) {
                module.default.layout = LayoutPublic
            } else {
                module.default.layout = module.default.layout || Layout
            }
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
