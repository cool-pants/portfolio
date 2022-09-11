import { setup } from '@css-render/vue3-ssr'
import { defineNuxtPlugin } from  '#app'

export default defineNuxtPlugin((nuxtApp) => {
    if(process.server){
        const { collect } = setup(nuxtApp.vueApp);
        const originalRender = nuxtApp.ssrContext.renderMeta
        nuxtApp.ssrContext!.renderMeta = () => {
            const result = originalRender();
            return {
                headTags: result['headTags'] + collect()
            };
        };
    }
});