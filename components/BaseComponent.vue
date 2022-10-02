<template>
    <Header />
    <SidebarComponent>
        <slot></slot>
    </SidebarComponent>
</template>

<script setup lang="ts">
import Header from '~~/components/HeaderComponent.vue';
import SidebarComponent from '~~/components/SidebarComponent.vue';
</script>