<template>
    <div class="intro" id="sec">
        <n-thing>
            <template #header>
                Projects
            </template>

            <n-grid cols="1 500:2 800:3" :x-gap="12" :y-gap="8">
                <n-grid-item v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" />
                </n-grid-item>
            </n-grid>
        </n-thing>
    </div>
</template>
  
<script lang="ts" setup>
import projectData from './Data/ProjectData';
import ProjectCard from './ProjectCardComponent.vue';

interface Project {
    id: number,
    key: string,
    desc: string,
    link: string,
    tags: string[]
}

const projects = ref<Project[]>(projectData);

</script>

<style lang="scss">
.intro {
    padding: 30px 100px;
    font-weight: 700 !important;
}

.image {
    display: flex;
    justify-content: center;
}

.n-thing-header__title,
.n-thing-main__content,
.n-list-item__main {
    font-weight: 700 !important;
    color: #666666 !important;
}

.n-list-item {
    padding: 0px 30px !important;
}

p,
.n-list-item__prefix {
    font-weight: 800;
    color: #555;
}
</style>