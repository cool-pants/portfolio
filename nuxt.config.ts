import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['vueuc'],
    },

    css: [
        '@/assets/css/main.css'
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    addtionalData: '@use "@/assets/scss" as *;'
                }
            }
        },
        plugins: [
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
        ssr: {
            noExternal: ['@nuxtjs/style-resources','@pinia/nuxt','moment', 'naive-ui', '@juggle/resize-observer', '@css-render/vue3-ssr'],
        }
    }
})
