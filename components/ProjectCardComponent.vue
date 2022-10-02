<template>
    <n-card :title="props.project.key">
        <template #header-extra>
            <n-button ghost color="#18181c" tag="a" target="_blank" circle size="small" :href="props.project.link">
                <template #icon>
                    <github-icon />
                </template>
            </n-button>
        </template>
        {{props.project.desc}}
        <template #footer>
            <n-space>
                <n-button size="tiny" v-for="tag in props.project.tags" :key="tag" ghost color="#18181c" round>
                    {{ tag }}
                </n-button>
            </n-space>
        </template>
    </n-card>
</template>

<script setup lang="ts">
import { LogoGithub as GithubIcon } from '@vicons/ionicons5';
interface Project {
    id: number,
    key: string,
    desc: string,
    link: string,
    tags: string[]
}

const props = defineProps<{
    project: Project
}>();
</script>