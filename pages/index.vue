<template>
    <div>
        <Header />
        <n-result status="success" title="succss" description="Naive-ui + Nuxt rc1">
            <template #footer>
                <n-space justify="center">
                    <n-button type="success">Naive-ui</n-button>
                    <n-button type="success" secondary>+</n-button>
                    <n-button type="success">Nuxt rc1</n-button>
                </n-space>
            </template>
        </n-result>
        <n-space>
            <n-button type="primary">naive-ui</n-button>
            <n-button type="info">naive-ui</n-button>
            <n-button type="warning">naive-ui</n-button>
        </n-space>
        <n-space>
            <n-tag>Nuxt3</n-tag>
            <n-tag>Vite</n-tag>
            <n-tag>Naive-ui</n-tag>
            <n-tag>SEO friendly</n-tag>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import Header from '~~/components/HeaderComponent.vue';
</script>